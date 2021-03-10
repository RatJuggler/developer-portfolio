import { useLocation, Route, Switch } from 'react-router-dom';
import Header from './layout/header';
import Hero from './layout/hero';
import Tabs from './layout/tabs';
import Profile from './Profile';
import Skills from './Skills';
import Career from "./Career";
import Interests from "./Interests";
import Footer from './layout/footer';
import SignOut from './layout/sign-out';


const App = () => {

  const location = useLocation();

  return (
    <div className="App">
      <Header pageName={ location.pathname } />
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
  );
}

export default App;
