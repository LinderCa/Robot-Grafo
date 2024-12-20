//importamos el arreglo de lugares
import { caminos } from './caminos.mjs';

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

//FUNCION EN BASE AL LUGAR 
const nodo_actual="Casa de Alicia";

function LugaresSegunNodoActual(nodo_actual,mapa){
    if(nodo_actual.length!="" && mapa.has(nodo_actual)){
        //Recorrer el mapa
        const lugares=mapa.get(nodo_actual);
        console.log(`Los lugares que puede dirigirse son: ${lugares}`)
    }else
        console.log("No existe dicho lugar en la ciudad");
}

LugaresSegunNodoActual(nodo_actual,mapa);