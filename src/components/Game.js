import React, { Component } from 'react'
// import myReducer from '../reducers/index'
import {connect} from 'react-redux'
import * as action from '../actions/actions'
import Board , {calculateWinner} from './Board';



const ROW = 20;
const COL = 20;


class Game extends Component {

  handleClick(i) {
    const st = this.props;
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
      st.setWinner(history,squares,currentMove,i,COL,ROW,winner);
 
    }
    else{


      st.saveHistory(history,squares,currentMove,i,COL,ROW);
     
    }
  }

  render() {
    const st = this.props;
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
          <button type="button" className="list"  onClick={() => st.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    const status = calculateWinner(current.squares) === false ? `Lượt đi của: ${ st.xIsNext ? 'X' : 'O'}` : `Người chiến thắng là: ${ st.winner}`;

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares}
            hl={current.highlight}
            onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <div><button type="button" onClick={()=>  st.sortHistory()}>Sắp xếp</button></div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
  return {
    history: state.history,
    stepNumber: state.stepNumber,
    xIsNext: state.xIsNext,
    winner: state.winner,
    isSort: state.isSort
    
  }
};

const mapDispatchToProps = (dispatch) =>{

  return{
    setWinner: (history,squares,currentMove,i,col,row,winner) =>{
      dispatch(action.setWinner(history,squares,currentMove,i,col,row,winner));
    },
    saveHistory: (history,squares,currentMove,i,col,row) =>{
      dispatch(action.saveHistory(history,squares,currentMove,i,col,row));
    },
    jumpTo: (step)=>{
      dispatch(action.jumpTo(step))
    },
    sortHistory: ()=>{
      dispatch(action.sortF())
    }
  }
};




export default connect(mapStateToProps,mapDispatchToProps) (Game);  
