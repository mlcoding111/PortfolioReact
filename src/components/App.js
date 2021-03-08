// CODED BY : Michael Lacroix ( MLWeb )
// LAST EDIT : 2020-09-09 

// https://itnext.io/structuring-your-sass-projects-c8d41fa55ed4
import React from "react";
// import ButtonInstallPWA from './ButtonInstallPWA'
import NavigationCustom from './Navigation/Nav'
import PageNotFound from './PageNotFound'
import AnimeListHome from './AnimeFinder/App'
import AnimeList from './AnimeFinder/AnimeList'
import ManagePirates from './PiratesDatabase/ManagePirates'
import EditPirates from './PiratesDatabase/EditPirates/EditPirate'
import AddPirate from './PiratesDatabase/AddPirates/AddPirate'
import Cv from './cv/Cv'
import WeatherApp from './WeatherApp/App'
import CurrencyConvertor from './CurrencyConvertor/App'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import components
import Home from './Home/Home'

// Doesn't work with build
// import { Route, Switch } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";

// Work with build
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import { Redirect } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <NavigationCustom />

        <ToastContainer autoClose={3000} hideProgressBar />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* Currency Convertor */}
          <Route path="/Currency Convertor" component={CurrencyConvertor} />

          {/* Anime finder */}
          <Route path="/Anime Finder/" component={AnimeListHome} />
          <Redirect from="/AnimeFinder" to="/Anime Finder" />
          <Route path="/animelist/" component={AnimeList} />
          {/* Pirate Database */}
          <Route path="/Pirates DB/" component={ManagePirates} />
          <Route path="/AddPirate/" component={AddPirate} />

          <Route path="/Pirate/:id" component={EditPirates} />
          <Route path="/cv" component={Cv} />
          {/* Weather App */}
          <Route path="/Weather App" component={WeatherApp} />
          <Redirect from="/WeatherApp" to="/Weather App" />
          {/* <Route path="/Rift Landing Page" render={() => (window.location = "https://rift-ps.com/", "_blank")} /> */}
          <Route component={PageNotFound} />

        </Switch>
        {/* <ButtonInstallPWA/> */}
      </Router>
    </>
  );
}

export default App;
