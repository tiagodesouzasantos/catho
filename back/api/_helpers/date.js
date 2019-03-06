'use strict';
function getDate(){
    let date = new Date();    
    let monthExt = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    let dateObj = { 
        "day": date.getDate(), 
        "month": date.getMonth() + 1, 
        "monthExt": monthExt[date.getMonth()],
        "year": date.getFullYear() 
    };
    dateObj.month = dateObj.month.toString().length == 1 ? "0" + dateObj.month : dateObj.month;
    dateObj.day = dateObj.day.toString().length == 1 ? "0" + dateObj.day : dateObj.day;
    return dateObj;
}
module.exports = {
    getDate
}