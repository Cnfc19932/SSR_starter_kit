import express from 'express';
import renderer from './helpers';

const app = express();
const port = process.env.PORT || 3000;

// Отсюда отдаем статику
app.use(express.static('public'));
app.use(express.static('static'));

app.get('*', (req, res) => {
    const content = renderer();

    res.send(content);
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});