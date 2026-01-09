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

// import { useState, useEffect } from "react";
// import LandingPage from "./pages/LandingPage";
// import { mockMatches, mockNews } from "./mocks/landingMockData";

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [matches, setMatches] = useState([]);
//   const [news, setNews] = useState([]);

//   // Simulate server latency
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setMatches(mockMatches);
//       setNews(mockNews);
//       setLoading(false);
//     }, 1200);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
    
//     <LandingPage
//       matches={matches}
//       news={news}
//       loading={loading}
//     />
//   );
// }

// export default App;
