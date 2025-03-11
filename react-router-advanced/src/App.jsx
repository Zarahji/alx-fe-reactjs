import Profile from "./pages/Profile";
import ProfileSettings from "./pages/ProfileSettings";
import Blog from "./pages/Blog";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="*" element={<ProfileSettings />} />
        <Route path="/profile/*" element={<ProtectedRoute><Profile /></ProtectedRoute>} />;
      </Routes>
    </Router>
  );
}

export default App;