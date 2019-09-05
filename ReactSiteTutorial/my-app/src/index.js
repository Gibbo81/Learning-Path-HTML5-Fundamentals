import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*i componenti Square non mantengono più il proprio stato, essi ricevono valori dal componente Board ed a loro volta lo informano di quando vengono cliccati. I componenti Square sono ora componenti controllati*/
/*i componenti funzione sono un modo più semplice di scrivere componenti che hanno il solo metodo render e non mantengono il proprio stato interno.*/

function Square(props){
  return(
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

class Board extends React.Component {
  renderSquare(i) {
    return(
      <Square
        value={this.props.squares[i] /*queste due sono props passate da board a square*/}
        onClick={() => this.props.onClick(i) /*Non essendo di fabbrica Potremmo dare un nome diverso alla prop onClick di Square o al metodo handleClick di Board ed il codice continuerebbe a funzionar*/}
      />
    );
  }

  render() {
    return (
      <div>
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
  constructor(props){
    super(props);
    this.state= {
      history : [{squares : Array(9).fill(null)}],
      xIsNext: true,
      stepNumber : 0
    };
  }

  jumpTo(step){
    this.setState({
      xIsNext: (step % 2) === 0,
      stepNumber : step
    })
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1); /* nel caso in cui volessimo “andare indietro nel tempo” e poi fare una nuova mossa da quel punto, possiamo buttare via tutta la storia “futura” che diverrebbe incorretta visto che in un certo senso la stiamo riscrivendo.*/
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber : history.length
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
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

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
