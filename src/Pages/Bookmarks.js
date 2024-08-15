import React, { useState, useEffect } from 'react';
import JobCard from '../components/JobCard';

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarks(savedBookmarks);
  }, []);

  if (bookmarks.length === 0) {
    return <p>No bookmarks yet.</p>;
  }

  return (
    <div className="bookmarks-page">
      {bookmarks.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default Bookmarks;
