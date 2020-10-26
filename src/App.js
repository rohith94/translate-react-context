import React, { Component } from "react";
import LanguageSelector from "./components/LanguageSelector";
import UserCreate from "./components/UserCreate";
import ColourContext from "./contexts/ColourContext";
import { LanguageContext } from "./contexts/LanguageContext";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <LanguageContext>
          <div>
            <LanguageSelector />
            <ColourContext.Provider value="red">
              <UserCreate />
            </ColourContext.Provider>
          </div>
        </LanguageContext>
      </div>
    );
  }
}

export default App;
