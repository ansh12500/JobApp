import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job, onBookmark }) => {
  return (
    <div className="job-card">
      <h2>{job.title}</h2>
      <p>Location: {job.location}</p>
      <p>Salary: {job.salary}</p>
      <p>Phone: {job.phone}</p>
      <div className="job-card-actions">
        <Link to={`/job/${job.id}`} className="details-link">Details</Link>
        <button onClick={() => onBookmark(job)} className="bookmark-button">Bookmark</button>
      </div>
    </div>
  );
};

export default JobCard;
