import React from "react";
import ReactDom from "react-dom";
function Card(prop)
{return(
  <div>
    <h2>{prop.Name}</h2>
    <img src={prop.img} alt="avatar-img"/>
      <p>{prop.tel}</p>
      <p>{prop.email}</p></div>);
}

ReactDom.render(
  <div>
    <h1>MY contact</h1>
    <Card Name="Beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    tel="+123 456 789" email="b@beyonce.com"/>
    <Card Name="Jack Bauer" img="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQqkOD5qlrxN1dQgkkSYh8yMMtK0ficY7zPysR71dQaO3RKMmx2actA54y6fVYU3Q5dquubWTLtKDPt4Rc"
    tel="+987 654 321" email="jack@nowhere.com"/></div>,document.getElementById("root")
);