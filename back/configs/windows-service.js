var Service = require('node-windows').Service;

// Configure script to correct folder to start project in windows.
var svc = new Service({
  name:'ApiGMCI-eRP',
  description: 'API para recepção dos processos da GMCI-e ',
  script: 'C:\\node\\projetos\\gmci-e\\recepcaoprocesso\\index.js'
});
// svc.user.domain = 'new.band';
// svc.user.account = 'servicerepmicroled';
// svc.user.password = 'uxWDXIDNd2d2@@';
// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});
 
svc.install();
