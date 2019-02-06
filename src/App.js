import React, { Component } from "react";
import "./App.css";

import Uploader from "./components/Uploader";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>TESTING</p>
          <label>Image Upload</label>
          <Uploader
            id="image"
            name="image"
            data-images-only
            data-crop="4:3"
            onUploadComplete={info => console.log('Upload completed:', info)}
            />
      </div>
    );
  }
}

export default App;
