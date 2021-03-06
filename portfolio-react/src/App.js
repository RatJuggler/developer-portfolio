import { useEffect, useState } from 'react';
import { useLocation, Route, Switch } from 'react-router-dom';
import './fontawesome';
import getReactVersion from './utils';
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
    const currentSource = found ? found.groups["dataFrom"] : "json";

    const [aspect, setAspect] = useState(currentAspect);
    const [dataFrom, setDataFrom] = useState(getReactVersion(currentSource));

    const [profile, setProfile] = useState({
        avatarPath: "/img/avatar-ph.jpg",
        photoPath: "/img/photo-ph.jpg",
        name: "Loading..."
    });

    useEffect(() => {
        const dataUrl = "/" + dataFrom.source + "/profile" + (dataFrom.source === "json" ? ".json" : "");
        fetch(dataUrl)
            .then((res) => res.json())
            .then((data) => {
                setProfile(data);
            });
    }, [dataFrom, setProfile]);

    return (
        <div className="App">
            <Header dataFrom={ dataFrom } profile={ profile } aspect={ aspect } setDataFrom={ setDataFrom } />
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
