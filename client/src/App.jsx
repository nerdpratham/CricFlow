import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Header stays constant */}
      <Header isAuthenticated={false} />

      {/* Route-based page rendering */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

