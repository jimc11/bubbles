//import { Route, Switch } from "react-router-dom";
// import Cont1 from "./pages/Cont1";
// import Cont2 from "./pages/Cont2";
// import Cont3 from "./pages/Cont3";
// import TopNav from "./components/layout/TopNav";
import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import TopNav from "./components/layout/TopNav";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import "./App.css";
import Cont1 from "./pages/Cont1";
import Cont2 from "./pages/Cont2";
import Cont3 from "./pages/Cont3";
import Cont4 from "./pages/Cont4";
function App() {
  return (
    <div className="app">
      <TopNav
        link1="#section1"
        link2="#section2"
        link3="#section3"
        link4="#section4"
      />
      <div>
        <Container fluid style={{ padding : "0px"}}  >
            <ScrollableAnchor >
              <div className="cont1Wrapper" id={"section1"}>
                <Cont1></Cont1>
              </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={"section2"}>
              <div className="cont2Wrapper" >
                <Cont3></Cont3>
              </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={"section3"}>
              <div>
                <Cont3></Cont3>
              </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={"section4"}>
              <div>
                <Cont4></Cont4>
              </div>
            </ScrollableAnchor>
        </Container>
      </div>
    </div>
  );
}

export default App;
// style={{ width: "100%",
//     transform: "scaleY(-1)",
//     height: "0",
//     paddingTop: "45.9%", backgroundImage: "./images/section1.jpg",backgroundSize:"cover"}}
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