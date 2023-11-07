import React, { useState } from "react";
import styles from "./chat-region.module.css";

// Define the RightText component
function RightText({ messages }) {
  return (
    <div className={styles.right}>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
}

// Define the InputWithButton component
function InputWithButton({ addMessage }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    addMessage(inputValue);
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
  const [messages, setMessages] = useState(["I am on the right and get text."]);

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div className={styles.right}>
      <RightText messages={messages} />
      <InputWithButton addMessage={addMessage} />
    </div>
  );
}

export default ChatRegion;
