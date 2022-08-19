import React, {Component} from "react";
import Usuario from "./Componentes/Usuario";
import Formulario from "./Componentes/Formulario";
import { BrowserRouter,Switch, Route, NavLink } from "react-router-dom";
import './CSS/menu.css';

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
    fetch(URL)
    .then((respuesta) => respuesta.json())
    .then((usuariosJSON) => this.setState({ usuarios: usuariosJSON }))
    //.catch((e)=> console.log("termina")))
    //.finally((e) => console.log("terminò"))
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

UsuariosList = () => 
            this.state.usuarios.map(
                (e)=> (
                    <Usuario id={e.id} nombre={e.name} usuario={e.username} correo={e.email}/>
                )
            )
        

//los componentes devuelven elementos
    render() {
            
        return(
            
            <BrowserRouter>
{/*la dif entre Link y NavLink es que esta ult tiene clase activa*/}

{
    /*
            <nav className="menu">
                <Link className="enlace" to="/">Inicio</Link>
                <Link className="enlace" to="/formulario">Formulario</Link>
                <Link className="enlace" to="/usuarios">Usuarios</Link>
            </nav>
    */
}
           
            <nav className="menu">
                <NavLink to="/" activeClassName="activo" className="enlace" exact>Inicio</NavLink>
                <NavLink to="formulario" activeClassName="activo" className="enlace" >Formulario</NavLink>
                <NavLink to="usuarios" activeClassName="activo" className="enlace" >Usuarios</NavLink>
            </nav>

            <Switch>
            {/*quiero que el formulario este en la ruta X*/}
           
            <Route path="/" exact >
            {/* ordenar del mas exacto al màs generico o usarla palabra exact */}
                <Formulario FuncionAgregar={this.AgregarUsuarioFormulario}/>
                   
                {this.state.usuarios.map(
                    (e)=> (
                        <Usuario id={e.id} nombre={e.name} usuario={e.username} correo={e.email}/>
                    )
                )}
           </Route>

            <Route path="/formulario" >
                <Formulario FuncionAgregar={this.AgregarUsuarioFormulario}/>
            </Route>
            
            <Route path="/usuarios">
                {this.state.usuarios.map(
                    (e)=> (
                        <Usuario id={e.id} nombre={e.name} usuario={e.username} correo={e.email}/>
                    )
                )}
            </Route>
                

            </Switch>
            {/* este no tiene break */}

            </BrowserRouter>
        )
    }

    
}