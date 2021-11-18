import React, { useState, useEffect } from 'react'
import Card from './Card';


const Rejected = () => {
  const [rejectedCandidates, setRejectedCandidates] = useState([]);
  
  useEffect(() => {
    const fetchCandidates = () => {
      let storedCandidates =
        JSON.parse(localStorage.getItem("candidates") || "[]") || [];
      const candidates = storedCandidates.filter(
        (candidate) => candidate.rejected
      );
      setRejectedCandidates(candidates);
    };

    fetchCandidates();
  }, []);

  return (
    <React.Fragment>
      <h1 className="page_title">Rejected Candidates</h1>
      <hr />
      <div className="card_container">
        {rejectedCandidates.length > 0 && (
          rejectedCandidates.map((candidate) => <Card key={candidate.id} candidate={candidate} />)
        )}
        {rejectedCandidates.length === 0 && <div>No Such Candidates :(</div>}
      </div>
    </React.Fragment>
  );
};

export default Rejected;
