import React from 'react';
import './scss/normalize.css';
import './scss/skeleton.css';
import './scss/style.css';
import {Route,Switch} from "react-router-dom";
import Homepage from "./containers/Homepage";
import New from "./containers/New";
import Scrawl from "./containers/Scrawl";
import Edit from "./containers/Edit";
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
      <div>
        <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/new" exact component={New} />
            <Route path="/edit/:slug" exact component={Edit} />
            <Route path="/scrawl/:slug" exact component={Scrawl} />
        </Switch>
      </div>
  );
}

export default App;
