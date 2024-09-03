import React from "react";
import { useEffect, useState } from "react";
import CardList from "./card/CardList";
import Pagination from "./Pagination";

function Post() {
  const [post, setPost] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://littlebigworld.in/wp-json/wp/v2/posts");
      const posts = await res.json();
      setPost(posts);
    }
    fetchData()
    //console.log(post)

  }, [])

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = post.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <h1>LATEST</h1>
      <CardList posts={currentPosts} />
      <Pagination
        totalPosts={post.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Post;
