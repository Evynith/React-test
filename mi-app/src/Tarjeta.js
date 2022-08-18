import React, {Component} from "react";

const cssI = {color: "red"};
const cssA = {color: "yellow"};
export default class Tarjeta extends Component{
constructor(props){
    super(props);
    this.state = {
        nombre: this.props.nombre,
        correo: this.props.correo,
        css: cssA,
        activo: true,
    }
}

/*
state = {
    nombre: 'Evelyn',
    correo:'evynith@gmail.com',
}
*/

InactivarFunc = () => {

    this.setState( this.state.activo ? {nombre: "cambie el nombre", css: cssI, activo:false} :
    {nombre: "cambie el nombre2", css: cssA, activo:true}
    );

}

render() {
    return (
        <div style={this.state.css}>
            <h1>{this.props.titulo}</h1>
            <h2>{this.state.nombre}</h2>
            <p>{this.state.correo}</p>
            <button onClick={this.InactivarFunc}>{this.state.activo ? "Inactivar": "activar"}</button>
        </div>
    )
}

}