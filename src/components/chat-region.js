import React, { useState } from "react";
import styles from "./chat-region.module.css";

function MessageBox({ message }) {
  return <div className={styles.messageBox}>{message}</div>;
}

function AnswerBox() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let randomString = "";
  for (let i = 0; i < 20; i++) {
    randomString += letters[Math.floor(Math.random() * letters.length)];
  }

  return <div className={styles.answerBox}>{randomString}</div>;
}

function RightText({ messages }) {
  return (
    <div className={styles.right}>
      {messages.map((message, index) => (
        <React.Fragment key={index}>
          <MessageBox message={message} />
          <AnswerBox />
        </React.Fragment>
      ))}
    </div>
  );
}

// Define the InputWithButton component
function InputWithButton({ addMessage, resetMessages }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    addMessage(inputValue);
    setInputValue("");
  };

  const handleResetClick = () => {
    resetMessages();
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
      <button onClick={handleResetClick} className={styles.resetButton}>
        Reset
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

  const resetMessages = () => {
    setMessages([]);
  };

  return (
    <div className={styles.right}>
      <RightText messages={messages} />
      <InputWithButton addMessage={addMessage} resetMessages={resetMessages} />
    </div>
  );
}

export default ChatRegion;
