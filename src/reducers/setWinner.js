const setWinner = (state = [],action)=>{
    if(action.type === 'WINNER'){

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
        
    }

    return state
}

export default setWinner