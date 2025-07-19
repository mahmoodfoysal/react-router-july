import React from "react";
import { useLoaderData } from "react-router";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h2>Posts: {posts.length} </h2>
      <div className="users">
        {posts.map((item, index) => (
          <Post post={item} key={index}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
