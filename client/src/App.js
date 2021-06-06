import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Search from './pages/Search';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route>
            <Search exact path={['/', '/search']}/>
          </Route>
          <Route>
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
