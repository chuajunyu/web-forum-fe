import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";
import { BACKEND_BASE_URL } from "./constants";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setID] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Title:", title);
    console.log("Content:", content);

    const token = localStorage.getItem("token");

    async function getID() {
      const response = await fetch(BACKEND_BASE_URL + "/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.json()
    }

    getID().then((output) => {
      setID(output.id);
    });

    async function createPost() {
      const response = await fetch(BACKEND_BASE_URL + "/posts", {
        method: "POST",
        mode: "cors",
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'},
        body: JSON.stringify({ 
          "user_id": id, 
          "title": title, 
          "content": content }),
      });
      return response.json();
    }
    createPost().then((output) => {
      console.log(output);
    });
  };

  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        style={{ marginTop: 24 }}
      >
        Create a new post
      </Typography>
      <form onSubmit={handleSubmit}>
        <div style={{ marginTop: 24 }}>
          <TextField
            id="margin-normal"
            label="Give your post a title!"
            value={title}
            multiline
            fullWidth
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div style={{ marginTop: 24 }}>
          <TextField
            id="margin-normal"
            label="Share your story!"
            value={content}
            multiline
            fullWidth
            minRows={10}
            onChange={(event) => setContent(event.target.value)}
          />
        </div>

        <div
          style={{ display: "flex", justifyContent: "flex-end", marginTop: 24 }}
        >
          <Button type="submit">Create Post</Button>
        </div>
      </form>
    </>
  );
};

export default NewPost;
