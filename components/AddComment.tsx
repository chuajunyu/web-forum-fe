import React from "react";
import { Button, Typography, TextField } from "@mui/material";
import { BACKEND_BASE_URL } from "./constants";

interface AddCommentProps {
  Id: string;
}

const AddComment: React.FC<AddCommentProps> = (props: AddCommentProps) => {
  const [userid, setID] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");
  const { Id } = props;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    async function getID() {
      const response = await fetch(BACKEND_BASE_URL + "/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.json();
    }

    getID().then((output) => {
      setID(output.id);
    });
    console.log(userid);
    
    async function createComment() {
      const response = await fetch(BACKEND_BASE_URL + "/comments", {
        method: "POST",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post_id: Id,
          user_id: userid,
          content: content,
        }),
      });
      return response.json();
    }

    createComment().then((output) => {
      console.log(output);
    //   location.reload();
    });
  };
  return (
    <>
      <Typography
        variant="h5"
        component="h1"
        gutterBottom
        style={{ marginTop: 24 }}
      >
        Leave a comment
      </Typography>
      <form onSubmit={handleSubmit}>
        <div style={{ marginTop: 24 }}>
          <TextField
            id="margin-normal"
            label="Have something to say?"
            value={content}
            multiline
            fullWidth
            minRows={3}
            onChange={(event) => setContent(event.target.value)}
          />
        </div>

        <div
          style={{ display: "flex", justifyContent: "flex-end", marginTop: 24 }}
        >
          <Button type="submit">Add Comment</Button>
        </div>
      </form>
    </>
  );
};

export default AddComment;
