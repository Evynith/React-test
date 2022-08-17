//import React from "react"; //forma 1
import React, {Component} from "react"; //forma 2

//class Clases extends React.Component{ //forma 1
export default class Clases extends React{ //forma 2 (con expoort incluido)
    render() {
        return (
            <div> Esto es una clase de react</div>
        );
    }
}

//export default Clases; //puedo ponerlo antes del class de mi declaracion de clase