import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

import "./SeasonDisplay.css";
import "./index.css";
class App extends React.Component {
  state = {
    lat: null,
    errorMessage: null,
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.setState({ lat: pos.coords.latitude });
      },
      (err) => this.setState({ errorMessage: err.message }),
    );
  }
  // componentDidUpdate() {
  //   console.log("component updated");
  // }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    }
    return <Spinner message="Please accept the location request!" />;
  }
  render() {
    return <div className="border-red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
