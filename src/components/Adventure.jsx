import React , {Component} from 'react';
import situaciones from './data.json';
import Botones from './Botones';
import Historial from './Historial';

class Adventure extends Component {
    constructor() {
    super();

    this.state = {
        situaciones,
        situacionActual:situaciones[0],
        numeroDeSituacion:1,
        numeroSiguiente:2,
        opcionElegida:"",
        historial:[],
      };
    }
    
    metodoA = () => {
        this.setState({
            numeroDeSituacion:this.state.numeroDeSituacion +1 ,
            opcionElegida: "a",
            numeroSiguiente: this.state.numeroSiguiente+1,
            situacionActual:this.state.situaciones.find(element => element.id === this.state.numeroSiguiente+"a"),
            historial:[ ...this.state.historial,"A"]
          });

    }


    metodoB = () => {
        
        this.setState({
            numeroDeSituacion:this.state.numeroDeSituacion +1 ,
            opcionElegida: "b",
            numeroSiguiente: this.state.numeroSiguiente+1,
            situacionActual:this.state.situaciones.find(element => element.id === this.state.numeroSiguiente+"b"),
            historial:[ ...this.state.historial,"B"]
          });
    }

    
    render() {
    return (
        <div>
            <h1 className="historia">{this.state.situacionActual.historia}</h1>
            <div className="opciones">
                <Botones metodoA={this.metodoA} metodoB={this.metodoB} opcionA={this.state.situacionActual.opciones.a} opcionB={this.state.situacionActual.opciones.b}/>
            </div>
            <Historial opcion={this.state.opcionElegida.toUpperCase()} historial={this.state.historial}/>
        </div>
    );
  }
}

export default Adventure;