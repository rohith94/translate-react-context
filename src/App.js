import React, { Component } from "react";
import UserCreate from "./components/UserCreate";
import ColourContext from "./contexts/ColourContext";
import LanguageContext from "./contexts/LanguageContext";

class App extends Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language: language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select language :
          <i
            className="flag in"
            onClick={() => this.onLanguageChange("hindi")}
          />
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <ColourContext.Provider value="red">
            <LanguageContext.Provider value={this.state.language}>
              <UserCreate />
            </LanguageContext.Provider>
          </ColourContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
