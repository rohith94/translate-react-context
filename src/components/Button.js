import React, { Component } from "react";
import ColourContext from "../contexts/ColourContext";
import LanguageContext from "../contexts/LanguageContext";

class Button extends Component {
  render() {
    return (
      <ColourContext.Consumer>
        {(colorValue) => {
          return (
            <button className={`ui button ${colorValue}`}>
              <LanguageContext.Consumer>
                {(value) => {
                  return value.language === "english"
                    ? "Submit"
                    : "Submit in Hindi";
                }}
              </LanguageContext.Consumer>
            </button>
          );
        }}
      </ColourContext.Consumer>
    );
  }
}
// Alternate way for context initialization
// Button.contextType = LanguageContext;

export default Button;
