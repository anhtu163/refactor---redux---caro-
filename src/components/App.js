import React, { Component } from 'react'
import store from '../containers'
import setWinner from '../reducers/setWinner'
 // import saveHistory from './reducers'
// import jumpTo from './reducers'
// import sortHistory from './reducers'


import Board , {calculateWinner} from './Board';


// const ROW = 20;
const COL = 20;


class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(400).fill(null),
        mv: 0,

      }],
      stepNumber: 0,
      xIsNext: true,
      winner: null,
      isSort: true,
    };
  }

  handleClick(i) {
    const st = this.state;
    const history = st.history.slice(0, st.stepNumber + 1);
    const current = history[history.length - 1];
    const currentMove = current.mv;
    const squares = current.squares.slice();
    if (current.highlight || squares[i]) {
      return;
    }
    squares[i] = st.xIsNext ? 'X' : 'O';
    if(calculateWinner(squares)){
      const winner = squares[i]
      store.dispatch(setWinner(winner,squares,history))
  /* this.setState(t =>({
      history: history.concat([{
        squares,
        mv: currentMove + 1,
        curRow: parseInt(i / COL, 10),
        curCol: parseInt(i % COL, 10),
        highlight: true,
      }]),
      stepNumber: history.length,
      xIsNext: !t.xIsNext,
      winner,
     
      
    })); */
    }
    else{
     // store.dispatch(saveHistory(currentMove))

      this.setState(t=>({
        history: history.concat([{
          squares,
          mv: currentMove + 1,
          curRow: parseInt(i / COL, 10),
          curCol: parseInt(i % COL, 10),
          highlight: false,
        }]),
        stepNumber: history.length,
        xIsNext: !t.xIsNext,
        
        
        
      })); 
    }
  }

  jumpTo(step) {
  
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  sortHistory(){
    this.setState(t =>({
      isSort: !t.isSort
    }));
  }

  render() {

    const st = this.state;
    const history = st.history.slice();
    const current = history[st.stepNumber];

    if(!st.isSort){
      history.reverse();
    }

    const moves = history.map((step) => {
      
      const move = step.mv;
      const desc =  (move&&move!==0) ?
        `Đi đến bước ( ${  step.curRow  } , ${  step.curCol  } )` :
        'Game mới';
      return (
        <li key={move}>
          <button type="button" className="list"  onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    const status = calculateWinner(current.squares) === false ? `Next player: ${ st.xIsNext ? 'X' : 'O'}` : `The Winner is: ${  st.winner}`;

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares}
            hl={current.highlight}
            onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <div><button type="button" onClick={()=>  this.sortHistory()}>Sắp xếp</button></div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}



export default Game;
