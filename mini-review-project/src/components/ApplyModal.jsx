function ApplyModal({ job, onClose }) {
  if (!job) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg relative">
        
        <h2 className="text-xl font-bold mb-4">
          Apply for Job
        </h2>

        <p className="mb-4 text-gray-600 capitalize">
          {job.title}
        </p>

        <p className="text-green-600 font-semibold mb-6">
          ✅ Application submitted successfully!
        </p>

        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Close
        </button>

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✖
        </button>
      </div>
    </div>
  );
}

export default ApplyModal;
