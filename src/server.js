import express from "express";
import renderer from "./helpers";
import matchRoutes from "./utils/matchPath";
import RouteMap from "./components/Routing/RouteMap";

const app = express();
const port = process.env.PORT || 3000;

// Отсюда отдаем статику
app.use(express.static("public"));
app.use(express.static("static"));

app.get("*", (req, res) => {
    const { path } = req;

    const route = matchRoutes(RouteMap, path);

    const { actions = [] } = route[0] || {};

    Promise.all(actions).then(() => {
        const content = renderer(path);

        res.send(content);
    });
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
