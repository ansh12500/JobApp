import React from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
  const job = jobs.find((job) => job.id === parseInt(id));

  if (!job) {
    return <p>Job not found</p>;
  }

  return (
    <div className="job-details">
      <h2>{job.title}</h2>
      <p>Location: {job.location}</p>
      <p>Salary: {job.salary}</p>
      <p>Phone: {job.phone}</p>
      {/* Add more details if available */}
    </div>
  );
};

export default JobDetails;
