import React from "react";
import Card from "./Card";
import Data from "../Data";

function createCard(dataObject) {
  return (
    <Card
      key={dataObject.id}
      title={dataObject.title}
      imgURL={dataObject.imgURL}
      description={dataObject.description}
      link={dataObject.link}
    />
  );
}

function App() {
  return (
    <div>
      <h1>My Projects</h1>
      <p className="intro">
        I take pride in the simplicity of this page, acknowledging its
        imperfections. What excites me is the application of React, enabling the
        construction of this page with reusable components. It represents a
        venture into the realm of functional programming concepts, showcasing
        the power of a modular and efficient approach.
      </p>
      <div className="card-container">{Data.map(createCard)}</div>
      <footer>Made With ❤️ by Victor.Kevz ©2024</footer>
    </div>
  );
}

export default App;
