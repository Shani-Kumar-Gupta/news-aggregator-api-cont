const express = require('express');
const app = express();
const routes = express.Router();
// const bodyParser = require('body-parser');
const { authRouter, newsAggregatorRouter } = require('./routes');
const { PORT_NUMBER } = require('./config/env.config');
const { requestLoggerMiddleware, morganMiddleware } = require('./middlewares');
const {
  MSG_SERVER_LISTING,
  ERROR_EVENT,
  ERR_SERVER_START,
} = require('./constants/app.constant');
const helmet = require('helmet');

const PORT = PORT_NUMBER || 3000;

/* Middlewares */
// enabling the helmet middleware
app.use(helmet());
app.use(morganMiddleware);
app.use(requestLoggerMiddleware);
app.use(routes);
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* Routers */
routes.get('/', (req, res) => {
  return res
    .status(200)
    .send(`<h1>Welcome To News Aggregator Backend API Application</h1>`);
});

/* Auth Router */
routes.use('/auth', authRouter);

/* News Aggregator Router */
routes.use('/newsAggregator', newsAggregatorRouter);

/* CREATE and LISTEN Server (Running Server) */
app
  .listen(PORT, (error) => {
    if (!error) {
      console.log(MSG_SERVER_LISTING + PORT);
    }
  })
  .on(ERROR_EVENT, (error) => {
    console.error(ERR_SERVER_START + error);
  });
