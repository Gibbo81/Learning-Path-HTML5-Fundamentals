import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() =>  this.props.onClick()  /*Richiamando this.setState stiamo dicendo a React di ridisegnare quello Square ogni qual volta il suo <button> viene cliccato.*/}
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state={
      squares: Array(9).fill(null)
    };
  }

  handleClick(i){
    const squaresc = this.state.squares.slice(); /*ritorna la copia di una porzione dell'array contenente gli elementi compresi tra inzio e fine (fine escluso). Il metodo slice() ritorna la copia dell'intero array se non  contiene gli elementi di inizio e fine*/
    squaresc[i] = 'X';
    this.setState({squares: squaresc}); /*Richiamando this.setState stiamo dicendo a React di ridisegnare quello Square ogni qual volta viene chiamato*/
  }

  renderSquare(i) {
    return(
      <Square
        value={this.state.squares[i] /*queste due sono props passate da board a square*/}
        onClick={() => this.handleClick(i) /*Non essendo di fabbrica Potremmo dare un nome diverso alla prop onClick di Square o al metodo handleClick di Board ed il codice continuerebbe a funzionar*/}
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
