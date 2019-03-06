var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'CobrancaMovDTAFrontEnd',
  description: 'Projeto destinado para o processamento e envio das cobranças de movimentações de DTA',
  script: 'C:\\node\\projetos\\redex\\cobranca-mov-dta-front-end\\server\\index.js'
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
