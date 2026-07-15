import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// const root = createRoot(document.getElementById("root"));

// second();

// function second() {
//   root.render(
//     <div>
//       <p>I's </p>
//       <h2>{new Date().toLocaleTimeString()}</h2>
//       <p>time</p>
//       <button onClick={second}>Update</button>
//     </div>
//   );
// }

// setInterval(second, 1000);
