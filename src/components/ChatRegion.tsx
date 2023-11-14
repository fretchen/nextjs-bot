"use client";

import React, { useState } from "react";
import styles from "./chat-region.module.css";

import { useChat } from "ai/react";

type MessageBoxProps = {
  message: string;
};

function MessageBox({ message }: MessageBoxProps) {
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

function RightText({messages}: { messages : string[] }) {
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

type InputWithButtonProps = {
  addMessage: (message: string) => void;
  resetMessages: () => void;
};

function InputWithButton({ addMessage, resetMessages }: InputWithButtonProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const addMessage = (message:string):void => {
    setMessages((prevMessages: string[]) => [...prevMessages, message]);
  };

  const resetMessages = () => {
    setMessages([]);
  };

  return (
    <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
      {messages.length > 0
        ? messages.map((m) => (
            <div key={m.id} className="whitespace-pre-wrap mb-4">
              <b>{m.role === "user" ? "User: " : "AI: "}</b>
              {m.content}
            </div>
          ))
        : null}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed w-full max-w-md bottom-0 border border-gray-300 rounded mb-8 shadow-xl p-2"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

export default ChatRegion
