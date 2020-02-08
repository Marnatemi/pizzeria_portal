import React from 'react';
import styles from './Dashboard.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { currentDateTime } from '../Tables/utilsTables';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const demoContent = {
  dailyStatistics: [
    { order: 2, id: 'local', start: '12:30', status: 'cancelled' },
    { order: 4, id: 'local', start: '13:00', status: 'paid' },
    { order: 456, id: 'delivery', start: '13:30', status: 'paid' },
    { order: 234, id: 'local', start: '14:00', status: 'prepared' },
    { order: 345, id: 'delivery', start: '14:00', status: 'in delivery' },
    { order: 324, id: 'delivery', start: '14:30', status: 'prepared' },
    { order: 123, id: 'local', start: '14:30', status: 'ordered' },
    { order: 3, id: 'local', start: '15:00', status: 'thinking' },
  ],
  dailyList: [
    { order: 2, start: '12:30' },
    { order: 4, start: '13:00' },
    { order: 123, start: '14:30' },
    { order: 3, start: '15:00' },
    { order: 147, start: '17:00' },
    { order: 149, start: '17:00' },
    { order: 152, start: '20:00' },
    { order: 5, start: '21:30' },
  ],
};

const setId = id => {
  if(id >= 100){return('Reservation');}else{return('Event');}
};

const Dashboard = () => (
  <Paper className={styles.component}>
    <h1>Dashboard view</h1>
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
          <TableCell>Order</TableCell>
          <TableCell>local/delivery</TableCell>
          <TableCell>Start</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.dailyStatistics.map(row => (
          <TableRow key={row.order}>
            <TableCell>{row.order}</TableCell>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.start}</TableCell>
            <TableCell>{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <List
      subheader={
        <ListSubheader>
          Events and Reservations for today
        </ListSubheader>
      }>
      {demoContent.dailyList.map(item => (
        <ListItem key={item.order} className={styles.list}>
          <ListItemIcon><AccessTimeRoundedIcon /></ListItemIcon>
          <ListItemText >{item.start}</ListItemText>
          <ListItemText >{setId(item.order)}</ListItemText>
          <ListItemText >{item.order}</ListItemText>
        </ListItem>
      ))}
    </List>
  </Paper>
);

export default Dashboard;
