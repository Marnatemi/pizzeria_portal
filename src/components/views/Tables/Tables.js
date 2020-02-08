import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { currentDateTime } from './utilsTables';



const demoContent = [
  { hour: '12', table1: '', table2: '', table3: '3' },
  { hour: '12:30', table1: '1', table2: '', table3: '3' },
  { hour: '13', table1: '1', table2: '4', table3: '3' },
  { hour: '13:30', table1: '1', table2: '4', table3: '' },
  { hour: '14', table1: '1', table2: '4', table3: '123' },
  { hour: '14:30', table1: '', table2: '4', table3: '123' },
  { hour: '15', table1: '', table2: '', table3: '123' },
  { hour: '15:30', table1: '', table2: '', table3: '' },
  { hour: '16', table1: '234', table2: '2', table3: '' },
  { hour: '16:30', table1: '234', table2: '2', table3: '456' },
  { hour: '17', table1: '234', table2: '', table3: '456' },
  { hour: '17:30', table1: '234', table2: '', table3: '456' },
  { hour: '18', table1: '', table2: '5', table3: '456' },
  { hour: '18:30', table1: '', table2: '5', table3: '' },
  { hour: '19', table1: '', table2: '', table3: '' },
  { hour: '19:30', table1: '678', table2: '', table3: '' },
  { hour: '20', table1: '678', table2: '', table3: '' },
  { hour: '20:30', table1: '678', table2: '', table3: '345' },
  { hour: '21', table1: '678', table2: '789', table3: '345' },
  { hour: '21:30', table1: '678', table2: '789', table3: '345' },
  { hour: '22', table1: '678', table2: '789', table3: '345' },
  { hour: '22:30', table1: '', table2: '789', table3: '345' },
  { hour: '23', table1: '', table2: '', table3: '345' },
  { hour: '23:30', table1: '', table2: '', table3: '345' },
  { hour: '24', table1: '', table2: '', table3: '345' },
];

const links = table => {
  if (table > 99) {
    return (
      <TableCell>
        <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/reservation/booked/${table}`} variant='outlined' color='primary'>{table}</Button>
      </TableCell>
    );
  } else if (table === '') {
    return (
      <TableCell>
        <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/reservation/new`}>R</Button>
        <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`}>E</Button>
      </TableCell>
    );
  } else if (table <= 99) {
    return (
      <TableCell>
        <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/event/${table}`} variant='outlined' color='default'>{table}</Button>
      </TableCell>
    );
  }
};

const Tables = () => (
  <Paper className={styles.component}>
    <h1>Tables view</h1>
    <form className={styles.form}>
      <TextField
        label='Date'
        type='datetime-local'
        defaultValue={currentDateTime()}
      />
    </form>
    <Table size='small'>
      <TableHead>
        <TableRow>
          <TableCell>Hour</TableCell>
          <TableCell>Table 1</TableCell>
          <TableCell>Table 2</TableCell>
          <TableCell>Table 3</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.hour}>
            <TableCell>{row.hour}</TableCell>
            {links(row.table1)}
            {links(row.table2)}
            {links(row.table3)}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Tables;
