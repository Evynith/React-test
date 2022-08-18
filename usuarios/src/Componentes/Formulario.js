import React, {Component} from "react";
import '../CSS/form.css'
import '../CSS/button.css'

export default class Formulario extends Component {

    constructor(props){
        super(props);
        this.state = {
            nombre: "",
            usuario: "",
            correo: ""
        }
    }

    AgregarUsuario = (e) => {
        e.preventDefault();
        this.props.FuncionAgregar(this.state.nombre, this.state.usuario, this.state.correo);
        this.Inicializarestado();
    }

    AsignarEstdo = (e) => {
        this.setState (
            {
                [e.target.name]: e.target.value
            }
        )
    }
Inicializarestado = () => {
    this.setState ({
        nombre: "",
        usuario: "",
        correo: ""
    })
}

    render() {
        return (
            <div>
                <form id="form" onSubmit={this.AgregarUsuario}>
                    <input
                    type="text"
                    id= "nombre"
                    name="nombre"
                    placeholder="nombre de usuario"
                    required
                    value={this.state.nombre}
                    onChange={this.AsignarEstdo}
                    />
                    <input
                    type="text"
                    id= "usuario"
                    name="usuario"
                    placeholder="usuario"
                    required
                    value={this.state.usuario}
                    onChange={this.AsignarEstdo}
                    />
                    <input
                    type="email"
                    id= "correo"
                    name="correo"
                    placeholder="correo"
                    required
                    value={this.state.email}
                    onChange={this.AsignarEstdo}
                    />
                    <div>
                        <button className="success">Agregar</button>
                        <button className="warning">Limpiar</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}