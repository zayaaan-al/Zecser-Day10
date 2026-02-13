import { useEffect, useState } from "react";
import { getJobs } from "../services/jobService";
import JobCard from "../components/JobCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import ApplyModal from "../components/ApplyModal";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await getJobs();
        setJobs(data.slice(0, 12));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-8">
        Available Jobs
      </h2>

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onApply={setSelectedJob}
          />
        ))}
      </div>

      {/* Modal */}
      <ApplyModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
      />
    </div>
  );
}

export default Jobs;
