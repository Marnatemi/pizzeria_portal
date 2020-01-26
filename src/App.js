import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from  '../src/components/views/Login/Login';
import Dashboard from  '../src/components/views/Dashboard/Dashboard';
import Tables from '../src/components/views/Tables/Tables';
import TablesBooking from '../src/components/views/Tables/TablesBooking';
import TablesBookingNew from '../src/components/views/Tables/TablesBookingNew';
import TablesEvents from '../src/components/views/Tables/TablesEvents';
import TablesEventsNew from '../src/components/views/Tables/TablesEventsNew';
import Waiter from '../src/components/views/Waiter/Waiter';
import WaiterOrder from '../src/components/views/Waiter/WaiterOrder';
import WaiterOrderNew from '../src/components/views/Waiter/WaiterOrderNew';
import Kitchen from '../src/components/views/Kitchen/Kitchen';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React now! Lol
            </a>
          </header>
        </div>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Dashboard} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/booked/:id'} component={TablesBooking} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={TablesBookingNew} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/event/:id'} component={TablesEvents} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={TablesEventsNew} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/ordering/order/:id'} component={WaiterOrder} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/ordering/new'} component={WaiterOrderNew} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
