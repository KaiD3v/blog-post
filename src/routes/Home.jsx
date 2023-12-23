import { useState, useEffect } from "react";
import blogFetch from "../axios/config";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [del, setDel] = useState();

  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/posts");
      const data = response.data;
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const deletePost = async (id) => {
    try {
      await blogFetch.delete(`/posts/${id}`);

      getPosts();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="home">
      <h1>Últimos Posts:</h1>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>
              {typeof post.body === "string" ? post.body : "Conteúdo inválido"}
            </p>
            <Link to={`posts/${post.id}`} className="btn">
              Ler Mais
            </Link>
            <button onClick={(e) => deletePost(post.id)} className="btn">
              <span class="material-symbols-outlined">delete</span>
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
