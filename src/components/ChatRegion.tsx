import React, { useState } from "react";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

type MessageBoxProps = {
  message: string;
};

function MessageBox({ message }: MessageBoxProps) {
  return <div>
    <Paper variant="outlined"><Typography align="right"><strong>User:</strong> {message}</Typography></Paper></div>;
}

function AnswerBox() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let randomString = "";
  for (let i = 0; i < 20; i++) {
    randomString += letters[Math.floor(Math.random() * letters.length)];
  }

  return <div>
    <Paper><Typography align="left"><strong>AI:</strong> {randomString}</Typography></Paper></div>;
}

function RightText({messages}: { messages : string[] }) {
  return (
    <div>
      <Grid container spacing={2}>
      {messages.map((message, index) => (
        <React.Fragment key={index}>
          <Grid item xs={12}>
            <MessageBox message={message} />
          </Grid>
          <Grid item xs={12}>
            <AnswerBox />
          </Grid>
        </React.Fragment>
      ))}
      </Grid>
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
      <TextField
        value={inputValue}
        onChange={handleInputChange}
      />
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button variant="contained" onClick={handleButtonClick}>
        Send
      </Button>
      <Button variant="contained" color="warning" onClick={handleResetClick}>
        Reset
      </Button>
      </ButtonGroup>
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
    <div>
      <RightText messages={messages} />
      <InputWithButton addMessage={addMessage} resetMessages={resetMessages} />
    </div>
  );
}

export default ChatRegion;
