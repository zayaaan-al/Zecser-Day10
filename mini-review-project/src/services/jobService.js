import { JOBS_API } from "../constants/apiUrls";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getJobs = async () => {
  const response = await fetch(`${BASE_URL}${JOBS_API}`);

  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }

  return response.json();
};
