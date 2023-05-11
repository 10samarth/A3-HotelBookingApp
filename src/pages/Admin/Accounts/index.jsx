import React from "react";
import ChartistGraph from "react-chartist";
 
function AccountsComponent() {
 

  return (
    <div style={{ marginTop: "-60px" , marginLeft:'-185px', zIndex:-1}}>
      <h2>Reports</h2>
      <iframe
 
      width="100%"
      height="100%"
      src="http://localhost:3001/"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      style={{
        width:"1000px",
        height: '100vh'}}
    />
        
    </div>
  );
}

export default AccountsComponent;
