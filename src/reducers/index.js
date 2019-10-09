import { combineReducers } from 'redux'
import saveHistory from './saveHistory'
import jumpTo from './jumpTo'
import setWinner from './setWinner'
import sortHistory from './sortHistory'

export default combineReducers({
  saveHistory,
  jumpTo,
  sortHistory,
  setWinner
})