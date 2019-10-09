export const HISTORIES = 'HISTORIES'
export const WINNER = 'WINNER'
export const JUMP_TO = 'JUMP_TO'
export const SORT = 'SORT'

export const saveHistory = ({ // history,squares,currentMove,i,COL,ROW) =>({
    type: HISTORIES,
   /* history,
    squares,
    currentMove,
    i,
    COL,
    ROW */
})

export const setWinner = (winner) => ({ // squares,currentMove,i,COL,ROW,winner)=>({
    type: WINNER,
   /* squares,
    currentMove,
    i,
    COL,
    ROW, */
    winner
})

export const jumpTo = (step)=>({
    type: JUMP_TO,
    step
})

export const sortF = () =>({
    type: SORT,
     
})

