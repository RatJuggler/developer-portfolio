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

  const regex = /^\/[a-z]+\/(?<aspect>[a-z]+)\/(?<dataFrom>[a-z]+)$/gm;
  const found = location.pathname.match(regex);
  const aspect = found ? found.groups["aspect"] : "profile";
  const dataFrom = found ? found.groups["dataFrom"] : "json";

  return (
    <div className="App">
      <Header aspect={ aspect } />
      <Hero />
      <main className="container">
        <Tabs dataFrom={ dataFrom } />
        <Switch>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/career">
            <Career />
          </Route>
          <Route path="/interests">
            <Interests />
          </Route>
          {/*Default to match on profile.*/}
          <Route path="/">
            <Profile />
          </Route>
        </Switch>
      </main>
      <Footer />
      <SignOut />
    </div>
  );
}

export default App;
