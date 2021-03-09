import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layout/header';
import Hero from './layout/hero';
import Footer from './layout/footer';
import SignOut from './layout/sign-out';
import Profile from './Profile';
import Skills from './Skills';
import Career from "./Career";
import Interests from "./Interests";
import './App.css';

function App() {
  return (
    <Router basename="/react">
      <div className="App">
        <Header />
        <Hero />
        <main className="container">
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
