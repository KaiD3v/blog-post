import "./NewPost.css";

import blogFetch from "../axios/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const createPost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    try {
      await blogFetch.post("/posts", JSON.stringify(post));

      navigate("/");
    } catch (error) {
      console.error("Erro ao criar post:", error);
    }
  };

  return (
    <div className="new-post">
      <h2>Inserir novo Post:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite o Título"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea
            name="body"
            id="body"
            placeholder="Digite o Conteúdo"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <input type="submit" value="Criar Post" id="btn" className="btn" />
        </div>
      </form>
    </div>
  );
};

export default NewPost;
