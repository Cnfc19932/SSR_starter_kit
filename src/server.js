import express from "express";
import renderer from "./serverRender";
import matchRoutes from "./utils/matchPath";
import createStore from "./store/createStore";
import projectsMap from "./projectsMap";

// Подменяется webpack
const { App, reducers, routeMap } = projectsMap[process.env.APP_ID];

const app = express();
const port = process.env.PORT || 3000;

// Отсюда отдаем статику
app.use(express.static("public"));
app.use(express.static("static"));

app.get("*", (req, res) => {
    const { path } = req;

    const store = createStore(reducers);

    const route = matchRoutes(routeMap, path);

    const { actions = [] } = route[0] || {};

    const promises = actions.map(x => x(store.dispatch));

    Promise.all(promises).then(() => {
        const content = renderer(path, store, App);

        res.send(content);
    });
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
