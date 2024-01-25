import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Title:", title);
    console.log("Content:", content);
  };

  return (

    <>
    <Typography variant="h4" component="h1" gutterBottom style={{marginTop:24}}>
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
        <Button
          type="submit"
          className="text-black bg-gray-200 hover:text-white hover:bg-red-700">
          Create Post
        </Button>
      </div>
    </form>
    </>
  );
};

export default NewPost;
