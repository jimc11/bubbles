import "./Cont1.css";
import Fade from "react-bootstrap/Fade";
import React, { useState } from "react";

function Cont1() {
    const [open, setOpen] = useState(false);

   setTimeout(triggerSetOpen, 1000)

   function triggerSetOpen(){
    setOpen(true)
   }
    return (
        <div className="container1">
            <div className="bubbleImg">
                <div className="messageBubble">
                    <div className="messageText">
                        <Fade in={open}>
                            <div className="greeting">
                                Welcome to Bubbles, the only good API.
                            </div>
                        </Fade>
                        {/* <div className="test">test</div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cont1;