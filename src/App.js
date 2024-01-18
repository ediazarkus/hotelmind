import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './containers/Register/Register';
import Nav1 from './Examples/Navegation1';
import RegisterForm from './Examples/RegisterForm';
import Form from './Examples/Form';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Nav1} />
        <Route path="/Register" exact component={Register} />
        <Route path="/RegisterForm" exact component={RegisterForm} />
        <Route path="/Form" exact component={Form} />
      </Switch>
    </Router>
  );
}

export default App;
