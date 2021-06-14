import { combineReducers } from 'redux';
import phones from './phones';
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  phones,
  visibilityFilter
})