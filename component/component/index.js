import React, { useState } from "react";
import "./HelloWorld.css";
import { input_code } from "./code_completion_pb";
import { ServiceDefinitionClient } from "./code_completion_pb_service";

const HelloWorld = ({ goToNextStep }) => {
  const [code, setCode] = useState("");
  const [response, setResponse] = useState("");

  const handlegenerate_code = () => {
    const client = new ServiceDefinitionClient("https://alkhazeen.com:7000");
    const request = new input_code();
    request.setCode(code);

    // Metadata with the required header
    const metadata = {
      "snet-payment-channel-id": "180", // Replace with actual payment channel ID
    };

    client.generate_code(request, metadata, (err, response) => {
      if (err) {
        console.error("Error:", err);
        return;
      }
      console.log("Response received:", response.getOutCode());
      setResponse(response.getOutCode());
      if (goToNextStep) {
        goToNextStep(); // Navigate to the next step if the function is passed as a prop
      }
    });
  };

  return (
    <div className="container">
      <h1 className="header">Code Generation</h1>
      <div className="input-container">
        <textarea value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter your code" />
        <div className="button-container">
          <button onClick={handlegenerate_code}>Generate</button>
        </div>
      </div>
      <div className="response-container">
        <p>{response}</p>
      </div>
    </div>
  );
};

export default HelloWorld;
