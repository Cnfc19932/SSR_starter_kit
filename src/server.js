import express from "express";
import renderer from "./helpers";
import matchRoutes from "./utils/matchPath";
import RouteMap from "./components/Routing/RouteMap";
import createStore from "./store/createStore";

const app = express();
const port = process.env.PORT || 3000;

// Отсюда отдаем статику
app.use(express.static("public"));
app.use(express.static("static"));

app.get("*", (req, res) => {
    const { path } = req;

    const store = createStore();

    const route = matchRoutes(RouteMap, path);

    const { actions = [] } = route[0] || {};
    console.log(actions);

    const a = actions.map(x => x(store.dispatch));
    console.log(a);

    Promise.all(a).then(() => {
        const content = renderer(path, store);

        res.send(content);
    });
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
