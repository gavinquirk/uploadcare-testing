import React, { Component } from "react";
import "./App.css";

// import ToggleMounting from "./components/ToggleMounting";
import Uploader from "./components/Uploader";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>TESTING</p>

        {/* <ToggleMounting> */}
          <label>Image Upload</label>
          <Uploader
            id="image"
            name="image"
            data-images-only />

        {/* </ToggleMounting> */}
        
      </div>
    );
  }
}

export default App;
