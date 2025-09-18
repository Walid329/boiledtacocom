import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/reviews" style={{ marginRight: "1rem" }}>Reviews</Link>
        <Link to="/concerts" style={{ marginRight: "1rem" }}>Concerts</Link>
        <Link to="/blog" style={{ marginRight: "1rem" }}>Blog</Link>
        <Link to="/playlists">Playlists</Link>
      </nav>

      {/* Page Routes */}
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

// Pages
function Home() {
  return <h1>🎶 Home – All Posts (Reviews, Concerts, Blog, Playlists)</h1>;
}

function Reviews() {
  return <h1>⭐ Reviews</h1>;
}

function Concerts() {
  return <h1>🎤 Concerts</h1>;
}

function Blog() {
  return <h1>📝 Blog</h1>;
}

function Playlists() {
  return <h1>📀 Playlists</h1>;
}

export default App;
