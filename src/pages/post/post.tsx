import React from "react";
import { useRouter } from "next/router";
import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import { BACKEND_BASE_URL } from "../../../components/constants";
import FullPost from "../../../components/FullPost";
import Comment from "../../../components/Comment";


interface Post {
  id: string;
  title: string;
  created_at: string;
  content: string;
}

const Post: React.FC = () => {
  const router = useRouter()
  const [Id, setId] = useState("6")

  const {
    isReady,
    query: {
      id,
    }
  } = router;

  // useEffect(() => {
  //   const {id} = router.query;
  //   if (id) {
  //     setId(id as string);
  //   }
  //   console.log(id);
  // },[router.query])

  useEffect(() => {
    if (!isReady) {
      console.log('Router not ready')
      return;
    }

    console.log(`ID: ${id}`)
  }, [isReady, id]);

  // Use the 'id' to fetch the specific content from an API or database
  // For simplicity, let's assume we have a 'posts' array with objects containing 'id' and 'content' properties


  // if (!post) {
  //   return <div>Loading...</div>;
  // }
  const cprops = {
    author: "Author",
    content:
      "Lorem ipsum doloro sit amet, consectetur adipiscing elit. Curabitar",
  };

  return (
    <Container maxWidth="lg">
      <p>Post ID: {id}</p>
        <FullPost {...{Id}} />
        <Comment {...cprops} />
        <Comment {...cprops} />
    </Container>
  );
};

export default Post;
