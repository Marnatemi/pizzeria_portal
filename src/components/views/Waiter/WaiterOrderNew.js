import React from 'react';
import styles from './Waiter.module.scss';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';


const demoContent = {
  newOrder: {
    id: '1',
    order: [],
    price: '0',
  },
  menu: [
    {
      id: 'Breakfast',
      params: [
        {
          id: 'Coffee',
          options: [
            'Latte',
            'Cappuccino',
            'Espresso',
          ],
        },
      ],
    },
    {
      id: 'Salad',
      params: [
        {
          id: 'Ingredients',
          options: [
            'cucumber',
            'tomato',
            'onion',
          ],
        },
      ],
    },
    {
      id: 'Pizza',
      params: [
        {
          id: 'Sauce',
          options: [
            'Tomato',
            'Sour cream',
          ],
        },
        {
          id: 'Toppings',
          options: [
            'Olives',
            'Mushrooms',
            'Salami',
          ],
        },
      ],
    },
  ],
};

const WaiterOrderNew = () => (

  <Paper className={styles.component}>
    <h2>New Order</h2>
    <Table>
      <TableHead>
        <TableCell>Table</TableCell>
        <TableCell>Products</TableCell>
        <TableCell>Options</TableCell>
        <TableCell>Price</TableCell>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell><Input defaultValue={demoContent.newOrder.id}></Input></TableCell>
          <TableCell>{demoContent.newOrder.order.map(product => (
            <List key={product.id}>
              <TableCell>{product.id}</TableCell>
            </List>
          ))}
          </TableCell>
          <TableCell>{demoContent.newOrder.order.map(product => (
            <List key={product}>
              {product.options.map(option => (
                <TableCell key={option}>{option}</TableCell>
              ))}
            </List>
          ))}
          </TableCell>
          <TableCell>{demoContent.newOrder.price}$</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Grid
      container
      justify="center"
      spacing={2}
    >
      {demoContent.menu.map(product => (
        <Grid item key={product.id} md={4} sm={6} container direction='column'>
          <h3>{product.id}</h3>
          {product.params.map(param => (
            <List key={param.id}>
              <ListItemText primary={param.id} />
              <Divider />
              <List>
                {param.options.map(option => (
                  <ListItem key={option} >
                    <ListItemText primary={option} />
                    <ListItemSecondaryAction>
                      <Checkbox
                        edge="end"
                        color='primary'
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </List>
          ))}

        </Grid>
      ))}
    </Grid>
  </Paper>

);

export default WaiterOrderNew;
