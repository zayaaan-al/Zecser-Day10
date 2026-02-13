import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
      <h1 className="text-4xl font-bold mb-4">
        Find Your Dream Job
      </h1>
      <p className="text-gray-600 mb-6">
        Browse the latest job listings and apply instantly.
      </p>
      <Link to="/jobs">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          View Jobs
        </button>
      </Link>
    </div>
  );
}

export default Home;
