import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import React from 'react';
import Navbar from './Components/NavBar'
import News from './Components/News';

function App() {
  let pageSize = 6;
  let country = "in";

  return (

    <div>
      <Router>
        <Navbar />


        <Switch>
          <Route exact path="/"><News key="general" pageSize={pageSize} country={country} category="general" /></Route>
          <Route exact path="/business"><News key="business" pageSize={pageSize} country={country} category="business" /></Route>
          <Route exact path="/entertainment"><News key="entertainment" pageSize={pageSize} country={country} category="entertainment" /></Route>
          <Route exact path="/health"><News key="health" pageSize={pageSize} country={country} category="health" /></Route>
          <Route exact path="/science"><News key="science" pageSize={pageSize} country={country} category="science" /></Route>
          <Route exact path="/sports"><News key="sports" pageSize={pageSize} country={country} category="sports" /></Route>
          <Route exact path="/technology"><News key="technology" pageSize={pageSize} country={country} category="technology" /></Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App
