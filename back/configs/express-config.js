const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('../api/routes');
const helmet = require('helmet');
const RateLimit = require('express-rate-limit');
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('./swagger.json');
const { syncDb } = require('./../api/_dbo/sync-db');
const app = express();

syncDb();
const limiter = new RateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes 
    max: 100, // limit each IP to 100 requests per windowMs 
    delayMs: 0 // disable delaying - full speed until the max limit is reached 
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use(helmet());
app.use(limiter);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
routes(app);
module.exports = app;