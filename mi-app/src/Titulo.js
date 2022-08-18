import Propiedades from "./Propiedades";

function Titulo(props){ //recibo automaticamente mis propiedades declaradas
    return (
        <div>
            <h1>{props.titulo}</h1>
        </div>
    );
}

export default Titulo;

/*
a traves de funciones no se puede mutar (cambiar el valor del parametro), 
para eso tenemos los estados ( a raves de las clases, que no se puede a traves de funciones)
*/