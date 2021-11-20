import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";

import { BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
  


import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>

        <Header />

        <Switch>
        <Route exact path="/login" component={Login} />


          <Route exact path="/" component={Home} />

          <Route path="/detail" component={Detail} />
        
          

      </Switch>      

      </Router>
    </div>
  );
}

export default App;
