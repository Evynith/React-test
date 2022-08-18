import Clases from "./Clases"; 
import Propiedades from "./Propiedades";

function Componenteuno() {
    return (
        <p>Hola, soy el componente nro 1</p>
    );
}

const Componentedos = () => <h1>Soy componente 2</h1>;

function Funciones() {
    return (
        <div>
            <Componentedos/>
            <Componenteuno></Componenteuno>
            <Componenteuno/>
            <Clases/>
            <Propiedades elemento="elemento que me lee propiedades en el div"/>
        </div> 
    );
}

export default Funciones;