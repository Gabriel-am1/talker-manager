// const express = require('express');
// const loginRoute = require('./routes/loginRouter');
// const talkerRouters = require('./routes/talkerRouters');

// const HTTP_OK_STATUS = 200;
// const app = express();

// app.use(express.json());
// // não remova esse endpoint, e para o avaliador funcionar
// app.get('/', (_request, response) => {
//   response.status(HTTP_OK_STATUS).send();
// });

// app.use('/talker', talkerRouters);
// app.use('/login', loginRoute);


// app.use((error, _req, res, _netx) => {
//   const { status, message } = error;

// return res.status(status || 500).json({ message });
// });

// module.exports = app;