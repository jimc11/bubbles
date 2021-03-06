import "./Cont1.css";
import Fade from "react-bootstrap/Fade";
import React, { useState } from "react";

function Cont1() {
   const [open, setOpen] = useState(false);

   setTimeout(triggerSetOpen, 700);

   function triggerSetOpen() {
      setOpen(true);
   }
   return (
      <div className="container1">
         <div className="bubbleImg"></div>
         <div className="messageBubble">
            <div className="messageText">
               <Fade in={open}>
                  <div className="greeting">
                     Welcome to Bubbles, the only good website.
                  </div>
               </Fade>
               {/* <div className="test">test</div> */}
            </div>
         </div>
      </div>
   );
}

export default Cont1;