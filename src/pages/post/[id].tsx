import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import FullPost from "../../../components/FullPost";
import Comment from "../../../components/Comment";

function Index() {
  const router = useRouter();
  const [Id, setCurId] = useState("");
  useEffect(() => {
    const { id } = router.query;
    if (id) {
      setCurId(id as string);
    }
  }, [router.query]);
  return (
    <div>
      <FullPost {...{ Id }} />
      {/* <Comment {...cprops} />
      <Comment {...cprops} /> */}
    </div>
  );
}

export default Index;
