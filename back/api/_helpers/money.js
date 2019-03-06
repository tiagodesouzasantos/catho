'use strict';
function toRealBrazil(value){
    let formatter  = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });
    console.log('real',formatter.format(value));
    return formatter.format(value).replace('.',',');
}
module.exports = {
    toRealBrazil
}