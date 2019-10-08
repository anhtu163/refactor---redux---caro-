const jumpTo = (state = [],action) =>{
    if(action.type === 'JUMP_TO'){
        return [
            ...state,
            {
                stepNumber: action.step,
                xIsNext: (action.step % 2) === 0,
            }
        ]
    }
    return state
}

export default jumpTo