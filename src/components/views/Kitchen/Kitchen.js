import React from 'react';
import styles from './Kitchen.module.scss';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';


const demoContent = [
  { start: '14:00', id: 123, products: [{ id: '1', product: 'Pizza', options: ['Souce Tomato', 'Olives', 'Red peppers', 'Green peppers', 'Mushrooms', 'Fresh basil', 'chees in edges'] }] },
  { start: '12:30', id: 3, products: [{ id: '1', product: 'Salad', options: ['Cucumber', 'Tomato', 'Feta cheese', 'Fresh herbs'] }, { id: '2', product: 'Salad', options: ['Olives', 'Tomato', 'Feta cheese', 'Black pepper']}]},
  { start: '13:55', id: 1, products: [{ id: '1', product: 'Pizza', options: ['Souce Tomato', 'Olives', 'Red peppers', 'Salami', 'Fresh basil', 'standard'] }] },
  { start: '12:15', id: 234, products: [{ id: '1', product: 'Breakfast', options: ['Cappuccino'] }, { id: '2', product: 'Breakfast', options: ['Cappuccino'] }, { id: '3', product: 'Breakfast', options: ['Latte'] }] },
  { start: '13:25', id: 2, products: [{ id: '1', product: 'Salad', options: ['Olives', 'Tomato', 'Cheese', 'Fresh herbs'] }] },
];

demoContent.sort((a, b) => {
  if (a.start < b.start)
    return -1;
  if (a.start > b.start)
    return 1;
  return 0;
});


const Kitchen = () => (
  <Paper className={styles.component}>
    <h1>Kitchen view</h1>
    {console.log(demoContent)}
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Start</TableCell>
          <TableCell>Table/Order</TableCell>
          <TableCell>Products</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell>{row.start}</TableCell>
            <TableCell>{row.id}</TableCell>
            <TableCell>
              {row.products.map(list => (
                <List key={list.id}
                  subheader={
                    <ListSubheader>
                      {list.product}
                    </ListSubheader>}>
                  <Divider />
                  {list.options.map(option => (
                    <ListItem key={option}>{option}</ListItem>
                  ))}
                </List>
              ))}
            </TableCell>
            <TableCell><Checkbox color='primary' /></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

  </Paper>
);

export default Kitchen;
