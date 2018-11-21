/**
 * * TIPOS DE ENLACES DE PAQUETES
 * () paquete que viene integrado en node
 * () paquete se instala como dependecia
 * () archivo propio
 *******************/
const fs = require("fs");
const colors = require('colors')


const listarTabla = (base, limite = 10) => {
  for(let i = 1; i <= limite; i++) {
    console.log(` ${i} x ${base} = ${i * base}`)
  }
}
const crearArchivo = ( base, limite = 10) => {
  return new Promise((resolve, reject) => {
    
    if(!Number(base)) {
        reject ("Asegurate de pasar un numero")
        return;
    }
    let data = "";
    
    for (let m = 1; m <= limite; m++) {
      data += `${base} x ${m} = ${m * base} \n`;
    }

    fs.writeFile(`tablas/tablas-${base}_limite-${limite}.txt`, data, err => {
      if (err) reject(err)
      else resolve(`tablas/tablas-${base}.txt`)
    });
  });
};


// exportar una archivo para que sea visible para los demas
module.exports  = {
  crearArchivo,
  listarTabla 
}