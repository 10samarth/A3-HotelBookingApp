import React from "react";
import "./chat.css"; // Import the CSS file
import { useState } from "react";
import { Link } from "react-router-dom";
const { Configuration, OpenAIApi } = require("openai");

function ChatComponent() {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  const [prompt, setPrompt] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const prePrompt =
    "Imagine you are a customer support employee of a resort named A3 Spartan Resort. Create imaginary details as required and help user answer the question like, what rooms are available or help me plan a trip. Question:";
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: prePrompt + " " + prompt,
        temperature: 0.5,
        max_tokens: 100,
      });
      setApiResponse(result.data.choices[0].text);
    } catch (e) {
      setApiResponse("Something is going wrong, Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="bg">
      <div style={{ marginTop: "83px" }}>
        <div className="chatbox">
          <div className="infotext">
            <h1>A3 AI - Spartan Resort Sammy Bot</h1>

            <p>Welcome to A3 - Spartan Resort. I am Sammy! </p>
            <p>
              I am AI-powered bot that can answer your questions about A3 -
              Spartan Resort and also help you plan trip.
            </p>

            <p>Please enter your prompt:</p>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              id="message"
              type="text"
              value={prompt}
              placeholder="Type here"
              onChange={(e) => setPrompt(e.target.value)}
            ></input>

            <button disabled={loading || prompt.length === 0} type="submit">
              {loading ? "..." : "Chat"}
            </button>
          </form>
        </div>
        <div id="chatlog" className="chatbox">
          {apiResponse && (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div>
                  <h6>Sammy:</h6>
                  {apiResponse}
                </div>
              </div>

              <div>
                <Link to="/rooms" className="btn btn-dark">
                  Book Room
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatComponent;
