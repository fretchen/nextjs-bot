
import { Typography } from "@mui/material";
import React, { useState } from "react";

import { Input } from '@mui/material';
import Router from "next/router";

function CreateRegion() {
  const [content, setContent] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e.target.files[0]);
      setContent(e.target.files[0]);
    }
  };
  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const reader = new FileReader();
      reader.readAsDataURL(content);
      reader.onloadend = async () => {
        const base64data = reader.result;
        const body = { file: base64data };
        console.log("body");
        console.log(body);
        await fetch("/api/post", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        await Router.push("/");
      };
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
        <Typography variant="h2" gutterBottom> Upload Document </Typography>
                  <form onSubmit={submitData}>

                    <Input
            type="file"
              onChange={handleFileChange}
            />
            <input disabled={!content} type="submit" value="Create" />
            <a className="back" href="#" onClick={() => Router.push("/")}>
              or Cancel
            </a>
          </form>
        </div>
  );
}

export default CreateRegion;