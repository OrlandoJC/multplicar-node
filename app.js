/**
 * * TIPOS DE ENLACES DE PAQUETES
 * () paquete que viene integrado en node
 * () paquete se instala como dependecia
 * () archivo propio
 *******************/

// *aplicando la desestructuracion para acceder una funcion determinada
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
const argv = require('./config/yargs').argv;
const colors = require('colors')
let comando = argv._[0];



switch (comando) {
  case "listar":
    console.log("Listar");
    listarTabla(argv.base, argv.limite)
    break;
  case "crear":
    crearArchivo(argv.base, argv.limite).then(archivo => {
      console.log(archivo.green);
    });
    break;
  default:
    console.log("comando no reconocido");
    break;
}
