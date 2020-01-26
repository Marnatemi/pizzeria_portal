import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';

const WaiterOrder = () => (

  <div className={styles.component}>
    <h2>Waiter Order view</h2>
  </div>
);

WaiterOrder.propTypes = {
  id: PropTypes.string,
};
export default WaiterOrder;
