import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends Component {
  static contextType = LanguageContext;
  render() {
    return (
      <div>
        <div>
          Select language :
          <i
            className="flag in"
            onClick={() => this.context.onLanguageChange("hindi")}
          />
          <i
            className="flag us"
            onClick={() => this.context.onLanguageChange("english")}
          />
        </div>
      </div>
    );
  }
}

export default LanguageSelector;
