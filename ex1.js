// common JS
// const fs = require('fs')
import fs from "fs"; 

const dir= './upload';

// Todas as funcoes sync sao bloqueadas
// Prefira utilizar as funcoes Async

if(!fs.existsSync(dir)){
  fs.mkdirSync(dir);
  console.log(`criando diretorio: ${dir}`);
}else{
  console.log(`Acessando diretorio: ${dir}`);
}

let msg = 'O melhor time de basquete do mundo e o Golden State Warriors';
let file = "golden-state-warriors.txt";
let path = `${dir}/${file}`;

if(!fs.existsSync(path)){
  fs.writeFileSync(path,msg);
  console.log(`Arquivo ${file} criado com sucesso`);
}