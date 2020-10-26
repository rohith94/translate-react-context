import React, { Component } from "react";

const Context = React.createContext("english");

export class LanguageContext extends Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language: language });
  };
  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
