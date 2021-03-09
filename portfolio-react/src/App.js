import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layout/header';
import Hero from './layout/hero';
import Tabs from './layout/tabs';
import Profile from './Profile';
import Skills from './Skills';
import Career from "./Career";
import Interests from "./Interests";
import Footer from './layout/footer';
import SignOut from './layout/sign-out';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <main className="container">
          <Tabs />
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
        </main>
        <Footer />
        <SignOut />
      </div>
    </Router>
  );
}

export default App;
