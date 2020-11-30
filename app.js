const express = require('express');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const { PORT = 3000 } = process.env;
const app = express();

app.use(express.static(__dirname + '/public'));
app.use('/', usersRouter);
app.use('/', cardsRouter);

app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`);
});
