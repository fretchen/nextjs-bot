import React, { useState } from "react";
import styles from "./chat-region.module.css";

// Define the RightText component
function RightText({ text }) {
  return (
    <div className={styles.right}>
      <p>{text}</p>
    </div>
  );
}

// Define the InputWithButton component
function InputWithButton({ setText }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setText(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className={styles.inputField}
      />
      <button onClick={handleButtonClick} className={styles.sendButton}>
        Send
      </button>
    </div>
  );
}

// Define the ChatRegion component
function ChatRegion() {
  const [text, setText] = useState("I am on the right and get text.");

  return (
    <div className={styles.right}>
      <RightText text={text} />
      <InputWithButton setText={setText} />
    </div>
  );
}

export default ChatRegion;
