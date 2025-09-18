import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/reviews" style={{ marginRight: "1rem" }}>Reviews</Link>
        <Link to="/concerts" style={{ marginRight: "1rem" }}>Concerts</Link>
        <Link to="/blog" style={{ marginRight: "1rem" }}>Blog</Link>
        <Link to="/playlists">Playlists</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/concerts" element={<Concerts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/playlists" element={<Playlists />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/posts`)
      .then(res => {
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        return res.json();
      })
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching posts:", err);
        setError("Failed to load posts. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading posts...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h1>🎶 Home – All Posts</h1>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <strong>{post.title}</strong>: {post.content}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Reviews() { return <h1>⭐ Reviews</h1>; }
function Concerts() { return <h1>🎤 Concerts</h1>; }
function Blog() { return <h1>📝 Blog</h1>; }
function Playlists() { return <h1>📀 Playlists</h1>; }

export default App;
