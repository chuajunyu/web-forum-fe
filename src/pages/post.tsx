import React from "react";
import FullPost from "../../components/FullPost";
import Comment from "../../components/Comment";
import { Grid, Container } from "@mui/material";

interface PostProps {
  title: string;
  content: string;
}

interface CommentProps {
  author: string;
  content: string;
}

const Post: React.FC<PostProps> = () => {
  const props = {
    title: "Title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus lacus at sem cursus, at varius erat aliquet. Proin nulla eros, blandit nec porttitor vel, pulvinar ac eros. Curabitur ornare felis a lacinia scelerisque. Curabitur non consectetur mauris. Quisque suscipit ante dui, at posuere justo malesuada quis. Aliquam sagittis lectus vel odio finibus, vel elementum tellus semper. Vestibulum sed erat a mi eleifend luctus. Mauris mi nulla, euismod vel dui sit amet, semper blandit nisi.",
  };

  const cprops = {
    author: "Author",
    content:
      "Lorem ipsum doloro sit amet, consectetur adipiscing elit. Curabitar",
  };

  return (
    <Container maxWidth="lg">
        <FullPost {...props} />
        <Comment {...cprops} />
        <Comment {...cprops} />
    </Container>
  );
};

export default Post;
