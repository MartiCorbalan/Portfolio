//Creem les variables per la data i la mostrem per pantalla
const data_index = document.getElementById('data');
var data = new Date();
data_index.innerHTML = data.getDate()+'/'+(data.getMonth()+1)+'/'+data.getFullYear()+', '+data.getHours()+':'+data.getMinutes();