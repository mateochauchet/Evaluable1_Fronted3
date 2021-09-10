import React , {Component} from 'react';

class Botones extends Component {
  render() {
    return (
        <div>
            <button className="botones"  onClick={this.props.metodoA}>A</button> <h2 className="opcion">{this.props.opcionA}</h2>
            <br/>
            <br/>
            <button className="botones" onClick={this.props.metodoB}>B</button> <h2 className="opcion">{this.props.opcionB}</h2>
        </div>
    );
  }
}

export default Botones;