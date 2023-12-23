import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogFetch from "../axios/config";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await blogFetch.get(`/posts/${id}`);
        setPost(response.data);
      } catch (err) {
        console.error(`Error ao realizar post: ${err}`);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="post-detail">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
