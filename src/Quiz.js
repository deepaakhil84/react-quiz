/*
 *
 * DO NOT EDIT THIS FILE
 *
 * Open the QuestionX files and complete the questions
 *
 */

import React from "react";
import Header from "./Question1-Header";
import LionsExhibit from "./Question2-LionsExhibit";
import TigersExhibit from "./Question3-TigersExhibit";
import MonkeysExhibit from "./Question4-MonkeysExhibit";
import AnimalSpotter from "./Question5-AnimalSpotter";
import WindowSize from "./Question6-WindowSize";
import ImageGallery from "./Question7-ImageGallery";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowingWindowWidth: true };
  }

  toggleWindowWidth = () => {
    this.setState(prevState => {
      return { isShowingWindowWidth: !prevState.isShowingWindowWidth };
    });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <hr />
        <LionsExhibit />
        <hr />
        <TigersExhibit
          population={3000}
          habitat={["forests", "swamps", "savannah"]}
        />
        <hr />
        <MonkeysExhibit
          latinName="Primates"
          commonSpecies={[
            "Macaque",
            "Squirrel Monkey",
            "Marmoset",
            "Howler Monkey"
          ]}
        />
        <hr />
        <AnimalSpotter />
        <hr />
        <div>
          {this.state.isShowingWindowWidth ? <WindowSize /> : null}
          <button onClick={this.toggleWindowWidth}>Toggle WindowWidth</button>
        </div>
        <hr />
        <ImageGallery />
      </div>
    );
  }
}

export default Quiz;
