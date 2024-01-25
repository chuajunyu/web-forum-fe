import React, { useEffect } from "react";
import { BACKEND_BASE_URL } from "./constants";
import { useState } from "react";
import { Typography, Card } from "@mui/material";

interface CommentProps {
  comment: {
    id: string;
    user_id: string;
    content: string;
    created_at: string;
  };
}

const Comment: React.FC<CommentProps> = (props: CommentProps) => {
  const [username, setUsername] = useState<string>("");
  const { id, user_id, content } = props.comment;
  useEffect(() => {
    const token = localStorage.getItem("token");
    async function getUser() {
      const response = await fetch(BACKEND_BASE_URL + `/users/${user_id}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.json();
    }

    getUser().then((output) => {
      setUsername(output.name);
    });
  }, [user_id]);
  return (
    <Card className="comment" sx={{marginTop: "5", marginBottom: "5", padding: "20px"}}>
      <Typography variant="h6">{username}</Typography>
      <Typography variant="subtitle1">{username}</Typography>
      <Typography variant="body1">{content}</Typography>
    </Card>
  );
};

export default Comment;
