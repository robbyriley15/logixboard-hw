import React from 'react';
import { shipmentData } from './ShipmentData';
import './App.css';
import { FilterPage } from './pages/FilterPage';
import { PieChart } from './components/PieChart';
import { DashboardPage } from './pages/DashboardPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact={true}>
            <DashboardPage />
          </Route>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
          <Route path="/all">
            <FilterPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
