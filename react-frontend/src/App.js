import logo from './logo.svg';
import './App.css';

import { withRouter } from "react-router"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import ListTopNumberComponent from './components/ListTopNumberComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import CreateTopNumberComponent from './components/CreateTopNumberComponent';

function App() {
  return (
    <div>
      <Router>     
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" exact component={ListTopNumberComponent}></Route>
              <Route path="/listar_top_numbers" component={ListTopNumberComponent}></Route>
              <Route path="/calcular_top_number" component={CreateTopNumberComponent}></Route>
            </Switch>
          </div>
          <FooterComponent />
      </Router>
    </div>
    
  );
}

export default App;
