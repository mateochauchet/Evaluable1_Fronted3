import React , {Component} from 'react';

class Historial extends Component {


  render() {
    return (
        <div className="recordatorio">
            <h3>Seleccion anterior:{this.props.opcion}</h3>
            <h4>Historial de opciones elegidas:</h4>
            <ul>
                {
                    this.props.historial.map(el=><li key={el.toString()}>{el}</li>)
                }
            </ul>
        </div>
    );
  }
}

export default Historial;