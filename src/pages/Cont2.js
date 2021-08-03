import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import "./Cont2.css";

function Cont2() {
  return (
    <div className="backdrop">
      <div className="mainContent">
        <div className="headTitle"> Look at these beautiful bubbles</div>
        <div className="bodyContent">
          <div class="gallery">
            <div className="gallery__item--1" >

            </div>
            <div className="gallery__item--2" >

            </div>
            <div className="gallery__item--3" >

            </div>
            <div className="gallery__item--4" >

            </div>
            <div className="gallery__item--5" >

            </div>
            <div className="gallery__item--6" >

            </div>

          </div>
          <div className="rightContent">
            <div className="articleHeader">A once in a lifetime opportunity.</div>
            <br></br>
            <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in sagittis elit, nec bibendum eros. Fusce eget arcu fringilla, cursus ipsum ac, condimentum metus. Quisque blandit ultricies est, at eleifend dolor tincidunt quis. Duis congue quis justo vitae ultricies. Curabitur a porta nisl, quis congue elit. Morbi lacinia, tortor ut auctor vestibulum, sapien ligula consequat purus, at molestie lectus mi vitae enim.</article>
            <br></br>
            <div className="links">
              <a className="link">Learn more </a>
              <a className="link">Buy </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Cont2;

// <Row>
//             <Col className="leftCont">

//                 <Row>
//                   <Col className="galleryBox">x</Col>
//                   <Col className="galleryBox">x</Col>
//                   <Col className="galleryBox">x</Col>
//                   <Col className="galleryBox">x</Col>
//                 </Row>
//                 <Row>
//                   <Col className="galleryBox">x</Col>
//                   <Col className="galleryBox">x</Col>
//                   <Col className="galleryBox">x</Col>
//                   <Col className="galleryBox">x</Col>
//                 </Row>
//                 <Row>
//                   <Col className="galleryBox">x</Col>
//                   <Col className="galleryBox">x</Col>
//                   <Col className="galleryBox">x</Col>
//                   <Col className="galleryBox">x</Col>
//                 </Row>
//                 <Row>
//                   <Col className="galleryBox">x</Col>
//                   <Col className="galleryBox">x</Col>
//                   <Col className="galleryBox">x</Col>
//                   <Col className="galleryBox">x</Col>
//                 </Row>
//                 <Row>
//                   <Col className="galleryBox">x</Col>
//                   <Col className="galleryBox">x</Col>
//                   <Col className="galleryBox">x</Col>
//                   <Col className="galleryBox">x</Col>
//                 </Row>

//             </Col>
//             <Col className="centerBox2">y</Col>
//             <Col className="rightBox2">z</Col>
//           </Row>