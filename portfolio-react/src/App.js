import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './Profile';
import Skills from './Skills';
import Career from "./Career";
import Interests from "./Interests";
import './App.css';

function App() {
  return (
    <Router basename="/react">
      <div className="App">
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/career">
            <Career />
          </Route>
          <Route path="/interests">
            <Interests />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
