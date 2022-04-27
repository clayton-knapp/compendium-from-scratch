import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import List from './views/List';
import './App.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <h2>Pokemon!</h2>
          <List />
        </Route>
      </Switch>
    </Router>
  );
}
