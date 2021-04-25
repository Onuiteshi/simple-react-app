import React from 'react';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Activity from './Pages/Activity/Activity'
import Wallet from './Pages/Wallet/Wallet'
import Market from './Pages/Market/Market'
import Earn from './Pages/Earn/Earn'
import Header from './Layout/Header/Header'
import NavTab from './Layout/NavTab/NavTab'
import './App.css';


function App() {
  return (
    // using Router to link pages
    <Router>
      <div className="App">
        {/* fixed header */}
        <Header />
        <div className="overflow-auto" style={{position:'fixed',left:0,right:0,top:'100px',bottom:'100px'}}>
          <Switch>
            <Route exact path = "/" component={Home} />
            <Route exact path = "/activity" component={Activity} />
            <Route exact path = "/wallet" component={Wallet} />
            <Route exact path = "/market" component={Market} />
            <Route exact path = "/earn" component={Earn} />
          </Switch>
        </div>
        {/* fixed bottom navbar */}
        <NavTab />
      </div>
    </Router>
  );
}

export default App;





























