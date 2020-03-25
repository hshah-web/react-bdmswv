import React from "react";
import '../style.css';
import LeftMenuBar from "./leftmenubar";
import RightPanel from "./rightpanel";

function Panel() {
  return (
    <div>
      <LeftMenuBar />
      <RightPanel />  
    </div>        
  );
}

export default Panel;