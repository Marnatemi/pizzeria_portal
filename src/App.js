import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../src/components/views/Login/Login';
import Dashboard from '../src/components/views/Dashboard/Dashboard';
import Tables from '../src/components/views/Tables/Tables';
import TablesReservation from '../src/components/views/Tables/TablesReservation';
import TablesReservationNew from '../src/components/views/Tables/TablesReservationNew';
import TablesEvents from '../src/components/views/Tables/TablesEvents';
import TablesEventsNew from '../src/components/views/Tables/TablesEventsNew';
import Waiter from '../src/components/views/Waiter/Waiter';
import WaiterOrder from '../src/components/views/Waiter/WaiterOrder';
import WaiterOrderNew from '../src/components/views/Waiter/WaiterOrderNew';
import Kitchen from '../src/components/views/Kitchen/Kitchen';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#921E2B',
    },
    //secondary: {main: '#11cb5f',},
  },
});

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <div className="App">
              <header className="App-header">
                <h3>Pizzeria Mamma-mia panel</h3>
              </header>
            </div>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + '/'} component={Dashboard} />
              <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
              <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/reservation/booked/:id'} component={TablesReservation} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/reservation/new'} component={TablesReservationNew} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/events/event/:id'} component={TablesEvents} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={TablesEventsNew} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter/ordering/order/:id'} component={WaiterOrder} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter/ordering/new'} component={WaiterOrderNew} />
              <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
