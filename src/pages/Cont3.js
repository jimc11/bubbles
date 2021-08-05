import "./Cont3.css";
import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { init } from "emailjs-com";
import { send } from "emailjs-com";
init("user_rTfaI7eCpvyAUv3ufiVAp");

function Cont3() {
  const [isLoading, setLoading] = useState(false);
  const [isDone, setDone] = useState(false);
  const [toSend, setToSend] = useState({
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setDone(false);
    send("service_ep4olgc", "template_rwkckjc", toSend, "user_rTfaI7eCpvyAUv3ufiVAp")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setLoading(false);
        setDone(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="container3">
      <div className="centerBox3">
        <div className="info">
          <div className="topLeft"></div>
          <div className="topRight">
            <div className="top">B U B B L E</div>
            <a className="blueButton">Pretty cool, right?</a>
            <article className="bottom">
              If you want a gorgeous landing page customized just for you, then you should contact
              me, James Crowley. Tell me exactly how you want your website to look and I'll make it
              happen. Additionally, I'm a fullstack engineer, so I can do more than just make pretty
              landing pages like this. Are you interested in making an e-commerce website? Do you
              need database connectivity? Are you developing an API or a website that you need
              another programmer for? I'm your guy for all these tasks! Use the forms or links below
              to contact me or see more of my work.{" "}
              {/* (I will NOT send you promotional emails or sell your data, I don't even know how to sell your data anyway). */}
            </article>
          </div>
        </div>
        <div className="bottomLeft">
          <div className="hmu">
            <div className="contactMe">Contact Me!</div>
            <div className="socIcons">
              <SocialIcon
                style={{ height: "30px", width: "30px" }}
                className="linkedin"
                url="https://www.linkedin.com/in/james-c-4910b08a/"
              />
              <SocialIcon
                className="github"
                url="https://github.com/jimc11"
                style={{ height: "30px", width: "30px" }}
              />
              <SocialIcon
                style={{ height: "30px", width: "30px" }}
                className="personal"
                url="https://jamesrobertcrowley.com/"
              />
            </div>
          </div>
          <form onSubmit={onSubmit} className="bothForms">
            <div className="messageBox">
              <label style={{ color: "rgba(255, 255, 255, 0.822)" }} className="msgLabel">
                Your message
              </label>
              <br />
              <textarea
                className="messageForm"
                type="text"
                name="message"
                placeholder="Your message"
                value={toSend.message}
                onChange={handleChange}
              />
            </div>

            <div className="submitBox">
            <div className="emailBox">

              <label style={{ color: "rgba(255, 255, 255, 0.822)" }} className="emailLabel">
                Email
              </label>
              <br />
              <input
                className="emailForm"
                type="text"
                name="reply_to"
                placeholder="Your email"
                value={toSend.reply_to}
                onChange={handleChange}
              />
            </div>
              
              <div className="buttonAndSpin">
                {!isLoading && (
                  <Button className="button1" type="submit" variant="primary">
                    Submit
                  </Button>
                )}
                {isLoading && <Spinner className="spinner1" animation="border" variant="primary" />}
                {isDone && <div className="sent">Sent!</div>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cont3;