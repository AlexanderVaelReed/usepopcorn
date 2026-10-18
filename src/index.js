import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movierating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onsetRating={setMovieRating}/>
      <p>this movie was rated {movierating} out of 10</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <StarRating
      maxRating={5}
      messages={["Very Poor", "Poor", "Average", "Good", "Excellent"]}
    />
    <StarRating
     size={24}
     color="red"
     className="test"
     defaultRating={2}
    />
    <Test />
  </React.StrictMode>,
);
