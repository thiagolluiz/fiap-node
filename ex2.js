import fs from 'fs';

const dir = "./upload";
const file = "lakers.txt";
const path = `${dir}/${file}`;

if (!fs.existsSync(dir)){
  fs.mkdir(dir,(err)=> {
    //se der erro, ele vai retornar um erro e para o processo
    if (err) throw err;
    // se pssar o throw ele vai executar o codigo abaixo
    console.log(`Diretorio ${dir} criado com sucesso`);
  });
}else{
  console.log(`Acessando o diretorio: ${dir}`);
}

let msg = "O segundo melhor time de basquete do mundo e o Los Angeles Lakers";
if (!fs.existsSync(path)){
  fs.writeFile(path,msg,(err)=> {
    if(err) throw err;
    console.log(`Arquivo ${file} criado com sucesso`);
  });
}