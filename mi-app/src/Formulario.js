import React, {Component} from "react";

export default class Formulario extends Component {
    constructor(props){
        super(props);
        this.state ={
            usuario: '',
            correo: ''
        }
    }

    EnviarInfo = (e) => { 
        e.preventDefault();
        this.LimpiarEstado();
    };

    LimpiarEstado = ()=> {
        this.setState({usuario: '', correo: ''})
    }

CambiarEstados = (evento) => {
    //el nombre deberia ser igual que el estado
    this.setState( {[evento.target.name]: evento.target.value})
}
    render (){
        return (
            <div>
                <form id="form" onSubmit={this.EnviarInfo}>
                    <input type="text" placeholder="usuario" required id="usuario" name="usuario" value={this.state.usuario}
                    onChange={this.CambiarUsuario}/>
                    <input type="email" placeholder="correo" required id="correo" name="correo" value={this.state.correo}
                    onChange={this.CambiarCorreo}/>
                    <br/>
                    <button type="submit">Enviar</button>
                    <button type="reset">Limpiar</button>
                </form>
            </div>
        )
    }
}

let promesaPar = new Promise(
    function(resolve,reject) {
        const num = 2;
        if(num%2==0) resolve("se resuelve")
        else reject("se rechaza")
    }
)

promesaPar.then(function(mensje) {
    console.log("se resuelve")
}).catch(function(mensaje){
    console.log(mensaje)
})
