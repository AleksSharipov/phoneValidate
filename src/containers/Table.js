import { connect } from 'react-redux';
import Table from '../components/Table/Table';
import { VisibilityFilters } from '../actions/index';

const getVisibleTodos = (phone, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return phone
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  phones: getVisibleTodos(state.phones, state.visibilityFilter)
})


export default connect(
  mapStateToProps,
)(Table)