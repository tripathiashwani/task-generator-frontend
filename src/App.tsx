import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import  History from "./pages/History";
import  Status from "./pages/Status";
import  Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/status" element={<Status />} />
        </Routes>
      </Router>
    </div>
  );
}





export default App;