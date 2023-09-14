import React, { Component } from "react";
import "./App.css";
import DVSOIDVC from "@idscan/onboarding";
import "@idscan/onboarding/dist/css/onboarding.css";

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const lib = new DVSOIDVC({
      el: "videoCapturingEl",
      applicantId: "ff082841-75f1-49ed-b54a-ee1740f28fa4",
      domainId: "c4091080-1c30-4c73-49b7-08dbb14e8517",
      publicKey: "pk_274eb098-b9df-43f5-84d2-d48d389bfc0e",
      chunkPublicPath: "networks",
      domainApi: "https://api-dvsonline.idscan.net",

      // applicantId: "289c37ce-023a-4eca-9d64-9a809c9c2518",
      // domainId: "466339a8-32a6-444e-5b28-08dbb0aead03",
      // publicKey: "pk_93d3442d-251e-4a31-93e0-17b7099b3c6f",
    });
  }

  render() {
    return (
      <div>
        <h1>IDVC2</h1>
        <div id="videoCapturingEl"></div>
      </div>
    );
  }
}

export default App;
