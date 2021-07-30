//import { Route, Switch } from "react-router-dom";
// import Cont1 from "./pages/Cont1";
// import Cont2 from "./pages/Cont2";
// import Cont3 from "./pages/Cont3";
// import TopNav from "./components/layout/TopNav";
import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import TopNav from './components/layout/TopNav'

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="topNavBar">
      <TopNav link1='#section1' link2='#section2' link3='#section3' link4='#section4'/>
      </div>
        <div>
          <ScrollableAnchor id={"section1"}>
            <section className="container1">Container 1</section>
          </ScrollableAnchor>
          <ScrollableAnchor id={"section2"}>
            <section className="container2">Container 2</section>
          </ScrollableAnchor>
          <ScrollableAnchor id={"section3"}>
            <section className="container3">Container 3</section>
          </ScrollableAnchor>
          <ScrollableAnchor id={"section4"}>
            <section className="container4">Container 4</section>
          </ScrollableAnchor>
        </div>
    </div>
  );
}

export default App;

/* <TopNav />
        <Switch>
          <Route path="/" exact>
            <Cont1></Cont1>
          </Route>
          <Route path="/Cont2">
            <Cont2></Cont2>
          </Route>
          <Route path="/Cont3">
            <Cont3></Cont3>
          </Route>
        </Switch> */