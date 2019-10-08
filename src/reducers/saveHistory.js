const histories = (state = [],action) =>{
    if(action.type === 'HISTORIES'){
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
    }
    return state
}

export default histories