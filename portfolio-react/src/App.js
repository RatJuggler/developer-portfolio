import { useEffect, useState } from "react";
import { useLocation, Route, Switch } from 'react-router-dom';
import './fontawesome';
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

    const regex = /^\/?[a-z]*\/(?<aspect>[a-z]+)\/(?<dataFrom>[a-z]+)$/;
    const found = location.pathname.match(regex);
    const currentAspect = found ? found.groups["aspect"] : "profile";
    const currentDataFrom = found ? found.groups["dataFrom"] : "json";

    const [aspect, setAspect] = useState(currentAspect);
    const [dataFrom, setDataFrom] = useState(currentDataFrom);

    const [profile, setProfile] = useState(false);

    useEffect(() => {
        const dataUrl = "/" + dataFrom + "/profile" + (dataFrom === "json" ? ".json" : "");
        fetch(dataUrl)
            .then((res) => res.json())
            .then((data) => {
                setProfile(data);
            });
    }, [dataFrom, setProfile]);

    return (
        <div className="App">
            <Header profile={ profile } aspect={ aspect } setDataFrom={ setDataFrom } />
            <Hero profile={ profile } />
            <main className="container">
                <Tabs setAspect={ setAspect } aspect={ aspect } dataFrom={ dataFrom } />
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
                        <Profile profile={ profile } />
                    </Route>
                </Switch>
            </main>
            <Footer />
            <SignOut />
        </div>
    );
}

export default App;
