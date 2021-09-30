import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/search" component={Search}/>
      </Switch>
    </BrowserRouter>
    </React.Fragment> 
  );
}

export default App;
