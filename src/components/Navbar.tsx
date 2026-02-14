import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="border-b border-gray-800 bg-gray-900">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="text-xl font-semibold text-white">
          Tasks Generator
        </h1>

        <div className="space-x-6 text-gray-400">
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>
          <Link to="/history" className="hover:text-white transition">
            History
          </Link>
          <Link to="/status" className="hover:text-white transition">
            Status
          </Link>
        </div>
      </div>
    </div>
  );
}
