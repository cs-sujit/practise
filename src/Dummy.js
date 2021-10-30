import logo from './logo.svg';
import './App.css';
import Login from './view/Login'
import DemoApp from './view/DemoApp'

import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Demo" component={DemoApp} /> 
      </Switch>
    </Router>
   
  );
}

export default App;
