import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./styles.css";

function App() {
  const saveToLocalStorage = () => {
    localStorage.setItem("item", 123);
    console.log(localStorage.getItem("item"));
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <ShowData text={"2"} />
      <ShowData />
      <button onClick={saveToLocalStorage}>set to localStorage</button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

class ShowData extends React.Component {
  render() {
    return <h1>Text:{this.props.text}</h1>;
  }
}

ShowData.defaultProps = {
  text: "def"
};
ShowData.propTypes = {
  text: PropTypes.string
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
