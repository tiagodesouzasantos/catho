const port = process.env.PORT || 3000;
const app = require('./configs/express-config.js');
app.listen(port, function () {
    console.log('Catho Test FrontEnd started on: ' + port);
});
