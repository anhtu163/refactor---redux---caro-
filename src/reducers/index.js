export const initialState = {
  history: [{
      squares: Array(400).fill(null),
      mv: 0,
    }],
    stepNumber: 0,
    xIsNext: true,
    winner: null,
    isSort: true,
    
};

const myReducers = (state = initialState,action) =>{

  switch(action.type){
    case "WINNER":
        return[
          ...state,
          {
              
              history: action.history.concat([{
                  squares: action.squares,
                  mv: action.currentMove + 1,
                  curRow: parseInt(action.i / action.COL, 10),
                  curCol: parseInt(action.i % action.COL, 10),
                  highlight: true,
                }]),
                stepNumber: action.history.length,
                xIsNext: !state.xIsNext,
                winner: action.winner,
          }
      ]
    case "JUMP_TO":
        return [
          ...state,
          {
              stepNumber: action.step,
              xIsNext: (action.step % 2) === 0,
          }
      ]
    case "HISTORIES":
        return [
          ...state,
          {
              history: action.history.concat([{
                  squares: action.squares,
                  mv: action.currentMove + 1,
                  curRow: parseInt(action.i / action.COL, 10),
                  curCol: parseInt(action.i % action.COL, 10),
                  highlight: false,
                }]),
                stepNumber: action.history.length,
                xIsNext: !state.xIsNext,
          }
      ]
    case "SORT":
        return [
          ...state,
          {
              isSort: !state.isSort
          }
      ]
    default:
        return state
  }

}


export default myReducers