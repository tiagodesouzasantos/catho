const port = process.env.PORT || 3001;
const app = require('./configs/express-config.js');
app.listen(port, function () {
    console.log('Catho Test BackEnd started on: ' + port);
});
