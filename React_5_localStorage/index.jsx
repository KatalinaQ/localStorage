import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>List of Items</h1>
      <Notes />
    </div>
  );
}

class Notes extends React.Component {
  state = {
    inputValue: "",
    list: []
  };

  inputRef = React.createRef();

  addNewNote = () => {
    const list = [...this.state.list, this.state.inputValue];
    this.setState({ list, inputValue: "" });
    this.inputRef.current.focus();
  };

  componentDidMount() {
    console.log("componentDidMount");
    const tmp = localStorage.getItem("localNotes");
    console.log(JSON.parse(tmp));
    if (tmp !== null) {
      this.setState({ list: JSON.parse(tmp) });
    }
  }

  componentDidUpdate() {
    //console.log("componentDidUpdate");
    this.saveToStore();
  }
  saveToStore = () => {
    if (this.state.list !== null) {
      const myObjStr = JSON.stringify(this.state.list);
      localStorage.setItem("localNotes", myObjStr);
    }
    //console.log(myObjStr);
  };
  updateInputValue = evt => {
    this.setState({
      inputValue: evt.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <input
          ref={this.inputRef}
          value={this.state.inputValue}
          onChange={this.updateInputValue}
        />
        <button onClick={this.addNewNote}>add</button>
        <ul>
          {this.state.list &&
            this.state.list.map((el, index) => <li key={index}>{el}</li>)}
        </ul>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
