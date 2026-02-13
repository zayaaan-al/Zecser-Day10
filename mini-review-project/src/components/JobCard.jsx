function JobCard({ job, onApply }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-xl transition duration-300">
      <h3 className="font-semibold text-lg mb-2 capitalize">
        {job.title}
      </h3>

      <p className="text-gray-600 text-sm">
        {job.body}
      </p>

      <button
        onClick={() => onApply(job)}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Apply
      </button>
    </div>
  );
}

export default JobCard;
