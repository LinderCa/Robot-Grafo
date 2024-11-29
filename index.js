//importamos el arreglo de lugares
import { caminos } from './caminos.mjs'
//Esta funcion permite contruir un grafo dado los caminos, cuales son las rutas a las que podemos recorrer
function ConstruirGrafo(border){
   //Retornar un objeto de mapa
    let mapa=new Map();
    border.forEach(element => {
        //Metodo split separa dos sub cadenas bajo una condicion o expresion y retorna un arreglo
        const [inicio,final]=element.split(" - ");
        if(!mapa.has(inicio)) mapa.set(inicio,[]);
        if(!mapa.has(final)) mapa.set(final,[]);

        mapa.get(inicio).push(final);
        mapa.get(final).push(inicio);
    });

    return mapa;
};

const mapa=ConstruirGrafo(caminos);

console.log(mapa);
