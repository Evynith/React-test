import React, {Component} from "react";

export default class Usuario extends Component {
    constructor(props){
        super(props);
        this.state = {
            usuarios: [],
        }
    }

    //cuando carga el componente
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((e) => e.json())
        .then((e) => this.setState({usuarios: e}));
        this.CrearPost();
    }
    CrearPost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }

    render(){
        return (
            <div>
              {  this.state.usuarios.map((e)=> {
                <div key={e.id} id={e.id}>
                    <h1>{e.name}</h1>
                </div>
            })}
            </div>
        )
    }
}