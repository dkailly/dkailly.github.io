import { useCallback, useState } from "react";

import "./App.css";

function App() {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const toggleContactInfo = useCallback(() => {
    setShowContactInfo((current) => !current);
  }, []);

  return (
    <div className="App">
      <div
        style={{
          paddingLeft: "12px",
          paddingRight: "12px",
        }}
      >
        <div className="card">
          {showContactInfo ? (
            <div className="App-test">
              <h1>Contact</h1>
              <h2>
                <a href="mailto:daniel.kailly@gmail.com">Email </a>
              </h2>
              <h2>
                <a href="https://www.linkedin.com/in/dkailly/">LinkedIn</a>
              </h2>
            </div>
          ) : (
            <>
              <h1>Daniel Kailly</h1>
              <h2>Vancouver Software Developer</h2>
            </>
          )}
          <button onClick={toggleContactInfo}>
            {showContactInfo ? "About" : "Contact"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
