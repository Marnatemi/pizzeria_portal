import React from 'react';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';

const Waiter = () => (

  <div className={styles.component}>
    <Link to={process.env.PUBLIC_URL + '/waiter/ordering/order/:id'}>Order ID</Link>
    <Link to={process.env.PUBLIC_URL + '/waiter/ordering/new'}>Order NEW</Link>
    <h2>Waiter view</h2>
  </div>
);


export default Waiter;
