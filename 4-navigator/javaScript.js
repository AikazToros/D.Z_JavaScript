//Мое местоположения 

const positioLat = 15;
const positioLong = 20 ;

//Адрес назначения
const addresslat = 25;
const addressLong = 35;


const a = (addresslat - positioLat) ** 2;
const b = (addressLong - positioLong)  ** 2;

const ab =  (a + b) ** 0.5;

console. log(ab);