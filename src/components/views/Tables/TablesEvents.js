import React from 'react';
import styles from './Tables.module.scss';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';


const demoContent = {
  eventData: ['hour', 'duration', 'table', 'guests', 'starters'],
  eventNumber: 2,
  eventDate: '2019-09-13',
  eventDetails: ['16:00', 2, 3, 3],
  eventHour: '16:00',
  table: 3,
  duration: 2,
  guests: 3,
  starters: ['bread', 'lemonWater'],
};

const TablesEvents = () => (

  <Paper className={styles.component}>
    <h2>Tables-events view</h2>
    <form className={styles.form}>
      <TextField
        label='Event number'
        defaultValue={demoContent.eventNumber} />
      <TextField
        label='Date'
        defaultValue={demoContent.eventDate}
      />
    </form>
    <Table>
      <TableHead >
        {demoContent.eventData.map(data => (
          <TableCell key={data} >{data}</TableCell>
        ))}
      </TableHead>
      <TableBody>
        <TableRow>
          {demoContent.eventDetails.map(detail => (
            < TableCell key={detail}>
              <TextField defaultValue={detail}/>
            </TableCell>
          ))}
          <TableCell>
            <Input></Input>
          </TableCell>
        </TableRow>
      </TableBody>

    </Table>
  </Paper>
);

export default TablesEvents;
