import React, {Component} from "react";
import Usuario from "./Componentes/Usuario";
import Formulario from "./Componentes/Formulario";
import { BrowserRouter, Route, Link } from "react-router-dom";

//rutas en una OnePage con react router dom (npm install react-router-dom)
//pongo en ell package.json la v de b que necesito y depues npm install

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            usuarios: []
        };
    }

    componentDidMount() {
        this.ListarUsuarios();
        //this.AgregarUsuarioJSON();
    }

    //desde el formulario debo acceder  a esta func, enviando prop a un component
    AgregarUsuarioFormulario = (nombre, usuario, correo) => {
        const usuarioNvo = {
            id: 11,
            name: nombre,
            username: usuario, 
            email: correo
        }
        this.AgregarUsuarioJSON(usuarioNvo);

        this.setState({
            usuarios: [...this.state.usuarios, usuarioNvo]
        })
    }

ListarUsuarios = () => {
    const URL = 'https://jsonplaceholder.typicode.com/users'
    fetch(URL).then((response)=> response.json()).then((usuariosJSON)=> this.setState(
        {
            usuarios: usuariosJSON
        }
    ).catch((e)=> console.log("termina"))).finally((e) => console.log("terminò"))
}

AgregarUsuarioJSON = (usuarioNvo) => {
    const URL = 'https://jsonplaceholder.typicode.com/users';
    const Header = {
        method: "POST",
        body: JSON.stringify({
            usuarioNvo
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }

    fetch(URL, Header).then((responce) => responce.json())
    .then((usuarioJSON)=> console.log(usuarioJSON))
    .catch((e)=> alert(e))
}

    render() {
        return(
            <div>
                <Formulario FuncionAgregar={this.AgregarUsuarioFormulario}/>
                {this.state.usuarios.map(
                    (e)=> (
                        <Usuario id={e.id} nombre={e.name} usuario={e.username} correo={e.email}/>
                    )
                )}
            </div>
        )
    }
}