import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = props => (
  <div className={styles.component}>
    <Link to={process.env.PUBLIC_URL + '/tables/booking/booked/:id'}>Booking ID</Link>
    <Link to={process.env.PUBLIC_URL + '/tables/booking/new'}>Booking NEW</Link>
    <Link to={process.env.PUBLIC_URL + '/tables/events/event/:id'}>Event ID</Link>
    <Link to={process.env.PUBLIC_URL + '/tables/events/new'}>Event NEW</Link>
    <h2>Tables view</h2>
  </div>
);

Tables.propTypes = {
  children: PropTypes.node,
};

export default Tables;
