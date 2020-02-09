import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    tables: PropTypes.any,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    updateTable: PropTypes.func,
  }

  componentDidMount() {
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(status, id) {
    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={(event) => this.props.updateTable(id, status='thinking')}>thinking</Button>
            <Button onClick={(event) => this.props.updateTable(id, status='new order')}>new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button onClick={(event) => this.props.updateTable(id, status='ordered')}>new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={(event) => this.props.updateTable(id, status='prepared')}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={(event) => this.props.updateTable(id, status='delivered')}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={(event) => this.props.updateTable(id, status='paid')}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={(event) => this.props.updateTable(id, status='free')}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if (active || !tables.length) {
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if (error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      tables.sort((a, b) => {
        if (a.id < b.id)
          return -1;
        if (a.id > b.id)
          return 1;
        return 0;
      });
      return (
        <Paper className={styles.component}>
          <h1>Waiter</h1>
          <Table size='small'>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/ordering/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.status, row.id)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;

