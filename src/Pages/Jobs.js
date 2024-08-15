import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from '../components/JobCard';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://testapi.getlokalapp.com/common/jobs?page=1');
      setJobs(response.data.jobs || []); // Ensure jobs is an array
    } catch (err) {
      setError('Failed to load jobs');
    }
    setLoading(false);
  };

  const handleBookmark = (job) => {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarks.push(job);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    alert('Job bookmarked!');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (jobs.length === 0) return <p>No jobs available</p>; // Handle empty state

  return (
    <div className="jobs-page">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onBookmark={handleBookmark} />
      ))}
    </div>
  );
};

export default Jobs;
