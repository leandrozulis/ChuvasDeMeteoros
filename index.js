import tempo from './data/dados.js';

let dataAtual = new Date();

let dia = `${dataAtual.getMonth()}/${dataAtual.getDate()}`;
console.log(dia);

const filtrarDataHoje = (arr) => {
  arr.forEach( data => data);
}

console.log(filtrarDataHoje(tempo));

// return arr.inicioDaChuva;
// console.log(dataAtual);