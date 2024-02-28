import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// BrowserRouter
// To add the ability to add routing functionality
// Switch
// Checks provided paths and stops checking all as soon as it finds a match
// Route
// Renders components based on the URL

// Home page
import Navigation from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";

// Pages
import Iphone from "./Pages/Iphone/iphone";
import Mac from "./Pages/Mac/Mac";
import ipad from "./Pages/ipad/ipad";
import watch from "./Pages/watch/watch";
import tv from "./Pages/tv/tv";
import music from "./Pages/music/music";
import support from "./Pages/support/support";
import Four04 from "./Pages/Four04/Four04";
import Productpage from "./Pages/Productpage/Productpage";

// import general css
import "./css/styles.css";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/mac" exact component={Mac} />
          <Route path="/ipad" exact component={ipad} />
          <Route path="/watch" exact component={watch} />
          <Route path="/tv" exact component={tv} />
          <Route path="/music" exact component={music} />
          <Route path="/support" exact component={support} />
          <Route path="/iphone" exact component={Iphone} />
          <Route path="/iphone/:pid" exact component={Productpage} />
          <Route path="/" component={Four04} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
