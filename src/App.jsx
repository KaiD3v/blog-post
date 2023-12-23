import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import NewPost from "./routes/NewPost";
import NavBar from "./components/NavBar";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<NewPost />} />
            <Route path="/posts/:id" element={<PostDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
