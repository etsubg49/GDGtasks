import React, { useCallback, useReducer, useMemo } from "react";
import useCharacterCount from "./useCharacterCount";
import "./App.css";

const characterLimit = 100;

function textReducer(state, action) {
  switch (action.type) {
    case "SET_TEXT":
      if (action.payload.length <= characterLimit) {
        return { ...state, text: action.payload };
      }
      return state; 
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(textReducer, { text: "" });
  const count = useCharacterCount(state.text); 

  const handleChange = useCallback((event) => {
    dispatch({ type: "SET_TEXT", payload: event.target.value });
  }, []);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(state.text).then(() => {
      alert("Text copied to clipboard!");
    });
  }, [state.text]);

  const progress = useMemo(() => {
    return Math.min((count / characterLimit) * 100, 100);
  }, [count, characterLimit]);

  const showWarning = progress >= 90;

  return (
    <div>
      <h1>Character Count Tracker</h1>
      <textarea
        value={state.text}
        onChange={handleChange}
        placeholder={`Type something... Max ${characterLimit} characters`}
      ></textarea>
      <p>Character Count: {count}/{characterLimit}</p>
      {state.text.length === characterLimit && (
        <p style={{ color: "red" }}>Maximum character limit reached!</p>
      )}
      {showWarning && (
        <p style={{ color: "red" }}>
          Warning: You're nearing the character limit!
        </p>
      )}

      <button onClick={handleCopy}>
        Copy
      </button>
    </div>
  );
}

export default App;