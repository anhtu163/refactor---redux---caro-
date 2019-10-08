const sortHistory = (state = [],action) =>{
    if(action.type === 'SORT'){
        return [
            ...state,
            {
                isSort: !state.isSort
            }
        ]
    }
    return state
}

export default sortHistory