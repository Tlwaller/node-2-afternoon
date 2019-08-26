const express = require('express');
const mc = require('./controllers/messages_controller');
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

app.post('/api/messages', mc.create);
app.get('/api/messages', mc.read);
app.put('/api/messages/:id', mc.update);
app.delete('/api/messages/:id', mc.delete);

app.listen(port, () => console.log(`listening on port ${port}`));