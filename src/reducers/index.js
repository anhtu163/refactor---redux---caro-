import { combineReducers } from 'redux'
import histories from './saveHistory'
import jumpTo from './jumpTo'
import setWinner from './setWinner'
import sortHistory from './sortHistory'

export default combineReducers({
  histories,
  jumpTo,
  sortHistory,
  setWinner
})