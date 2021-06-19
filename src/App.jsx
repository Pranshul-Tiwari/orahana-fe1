import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';
import NavbarTop from './components/NavbarTop/NavbarTop';
import NavbarBottom from './components/NavbarBottom/NavbarBottom';
// import Landing from './components/Landing/Landing';
const Landing = lazy(() => import('./components/Landing/Landing'));

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarTop />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/checkout" component={Landing} />
            <Route path="/product-details" component={Landing} />
            <Route path="/product-category" component={Landing} />
            <Route path="/" component={Landing} />
          </Switch>
        </Suspense>
      </Router>
      <NavbarBottom />
    </div>
  );
}

export default App;
