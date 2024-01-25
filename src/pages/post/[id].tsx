import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import FullPost from "../../../components/FullPost";
import Comment from "../../../components/Comment";
import AddComment from "../../../components/AddComment";
import { Container } from "@mui/material";
import { BACKEND_BASE_URL } from "../../../components/constants";

interface Comment {
  id: string;
  user_id: string;
  content: string;
  created_at: string;
}

function Index() {
  const router = useRouter();
  const [Id, setCurId] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const { id } = router.query;
    if (id) {
      setCurId(id as string);
    }

    console.log(`id: ${id}`);

    // Your code that depends on the id value
    const token = localStorage.getItem("token");
    console.log(`Bearer <${token}>`);
    async function getcomments() {
      const response = await fetch(BACKEND_BASE_URL + `/commentsbypost/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      return response.json();
    }
    getcomments().then((output) => {
      console.log(output);
      setComments(output);
    });
  }, [Id, router.query]);

  return (
    <Container maxWidth="md" sx={{ marginTop: 5 }}>
      <FullPost {...{ Id }} />
      <AddComment {...{ Id }} />
      {Array.isArray(comments) &&
        comments.map((comment) => (
          <div key={comment.id} style={{ marginBottom: "20px" }}>
            <Comment comment={comment} />
          </div>
        ))}
    </Container>
  );
}

export default Index;
