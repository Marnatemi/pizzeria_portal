import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, setTableStatus, getLoadingState } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),

});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  updateTable: (id, status) => dispatch(setTableStatus(id, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
