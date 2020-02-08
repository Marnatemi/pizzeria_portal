import React from 'react';
import styles from './Tables.module.scss';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { currentDate } from './utilsTables';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

const demoContent = {
  reservationOptions: [
    { id: 'Hour', options: ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'] },
    { id: 'Duration', options: ['1 h', '1,5 h', '2 h', '2,5 h', '3 h', '3,5 h', '4 h', '4,5 h', '5 h', '5,5 h', '6 h', '6,5 h', '7 h', '7,5 h', '8 h', '8,5 h', '9 h'] },
    { id: 'Table', options: ['1', '2', '3'] },
    { id: 'Guests', options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'] },
    { id: 'Starters', options: ['bread', 'lemonWater', 'bread & lemonWater'] },
  ],
};

const TablesReservationNew = () => {

  const [state, setState] = React.useState({
    Hour: '',
    Duration: '',
    Table: '',
    Guests: '',
    Starters: '',
  });

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const setValue = id => {

    if (id === 'Hour') {
      return (state.Hour);
    }
    if (id === 'Duration') {
      return (state.Duration);
    }
    if (id === 'Table') {
      return (state.Table);
    }
    if (id === 'Guests') {
      return (state.Guests);
    }
    if (id === 'Starters') {
      return (state.Starters);
    }
  };
  return (
    <Paper className={styles.component}>
      <h1>Tables-reservation-new view</h1>
      <form className={styles.form}>
        <TextField
          label='Event Id'
          defaultValue=''
        />
        <TextField
          label='Date'
          type="date"
          defaultValue={currentDate()}
        />
      </form>
      {demoContent.reservationOptions.map(reservationOptions => (
        <FormControl key={reservationOptions.id} className={styles.form}>
          {console.log(setValue(reservationOptions.id))}
          <InputLabel id={`${reservationOptions.id}-label`}>{reservationOptions.id}</InputLabel>
          <Select
            native
            labelId={`${reservationOptions.id}-label`}
            id={reservationOptions.id}
            value={setValue(reservationOptions.id)}
            onChange={handleChange(`${reservationOptions.id}`)}
            inputProps={{
              name: `${reservationOptions.id}`,
              id: `${reservationOptions.id}`,
            }}
          >
            {reservationOptions.options.map(option => (
              <option value={option} key={option}>{option}</option>
            ))}
          </Select>
        </FormControl>
      ))}
      <Box className={styles.box}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<PlaylistAddCheckIcon />}
          align='right'
          className={styles.button}
        >Confirm</Button>
      </Box>

    </Paper>
  );
};

export default TablesReservationNew;
