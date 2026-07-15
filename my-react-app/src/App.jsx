import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const myStyle = {
    fontWeight: "bold",
    color: "green",
    textTransform: "uppercase"
  };

  const styles = "green-text";

  let x = 0;

  const head1 = <h1>Hello, World!</h1>;
  const htmlString = "<h2>Hello, everyone!</h2>";

  const el1 = React.createElement(
    "h1",
    {
      id: 123,
      style: {
        color: "green",
        fontSize: 45,
        background: "#371313",
        lineHeight: 1.5
      }
    },
    "Some text"
  );

  const paragraph = React.createElement("p", {}, "Another text");
  const block = React.createElement("div", {}, paragraph);

  return (
    <>
      {block}
      {el1}
      <h2 id={124} style={{ fontSize: 45, color: "black", background: "gray" }}>
        Hello, everyone!
      </h2>
      {x === 0 && <h2>Hello</h2>}
      <p style={myStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        expedita cum maiores at ullam? Placeat impedit at dolorum possimus
        quibusdam numquam quae fuga sapiente minima quam! Quia quasi distinctio
        placeat!
      </p>
      <p className={styles}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        expedita cum maiores at ullam? Placeat impedit at dolorum possimus
        quibusdam numquam quae fuga sapiente minima quam! Quia quasi distinctio
        placeat!
      </p>
      {head1}
      <form action="">
        <label htmlFor="html">HTML</label>
        <br />
        <input type="checkbox" id="html" />
        <br />
        <input type="text" readOnly={true} />
        <br />
        <input type="text" readOnly />
      </form>
      <ul>
        <li>{htmlString}</li>
        <li dangerouslySetInnerHTML={{ __html: htmlString }}></li>
      </ul>
    </>
  );
}

export default App;
