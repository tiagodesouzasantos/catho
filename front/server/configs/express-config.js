
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const angularApp = __dirname + "/../../dist/front/";
// Configurações de segurança, proteção de cabeçalho e ddos/slowloris
const helmet = require('helmet');
const RateLimit = require('express-rate-limit');
const limiter = new RateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutos caso bloqueado 
    max: 100, // limite por IP, 100 requests por windowMs 
    delayMs: 0 // disable delaying - full speed until the max limit is reached 
});
app.use(helmet());
app.use(limiter);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(angularApp));

module.exports = app;