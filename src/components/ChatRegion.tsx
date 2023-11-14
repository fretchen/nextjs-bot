"use client";

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
import React, { useState } from "react";
import { useChat } from "ai/react";

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

function ChatRegion() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
      {messages.length > 0
        ? messages.map(m => (
            <div key={m.id} className="whitespace-pre-wrap mb-4">
              <b>{m.role === 'user' ? 'User: ' : 'AI: '}</b>
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
