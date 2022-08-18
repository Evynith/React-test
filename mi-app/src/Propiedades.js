import React from "react";
import './main.css'

const Seccion = (props) => {
    return (
        <section>
            <h1>Nombre de seccion {props.nombre}</h1>
        </section>
    );
}

const Sumar = (a,b) => a+b;

function Contenedor(props) {
    //dentro de las llaves puedo meter cualquier còdigo JS
    return (
         //acà puedo usar class que no choca (igual pasaba en v.viejas)
        <div>
            <div class="tarjeta">
                <h1>Titulo {props.titulo}</h1> 
                <h2>Subtitulo {props.subtitulo}</h2>
                <p>Parrafo {props.parrafo}</p>
            </div>
        </div>
    );
}

export default class Propiedades extends React.Component {
    render() {
        return (
            <div className="tarjeta">
                <Contenedor titulo="titulo 1" subtitulo="sub 1" parrafo="p 1"/>
                <Contenedor titulo="titulo 2" subtitulo="sub 2" parrafo="p 2"/>
                <Seccion nombre="algun dato"/>
                <div>
                    <div>
                        <p>{this.props.elemento /*palabra reservada props*/}</p>
                    </div>
                </div>
            </div>
        );
    }
}