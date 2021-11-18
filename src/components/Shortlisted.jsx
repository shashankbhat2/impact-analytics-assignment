import React, { useState, useEffect } from 'react'
import Card from './Card';

const Shortlisted = () => {
  const [shortlistedCandidates, setShortlistedCandidates] = useState([]);
  
  useEffect(() => {
    const fetchCandidates = () => {
      let storedCandidates =
        JSON.parse(localStorage.getItem("candidates") || "[]") || [];
      const candidates = storedCandidates.filter(
        (candidate) => candidate.shortlisted
      );
      setShortlistedCandidates(candidates);
    };

    fetchCandidates();
  }, []);

    return (
        <React.Fragment>
        <h1 className="page_title">Shortlisted Candidates</h1>
        <hr />
        <div className="card_container">
        {shortlistedCandidates.length > 0 && (
          shortlistedCandidates.map((candidate) => <Card key={candidate.id} candidate={candidate} />)
        )}
        {shortlistedCandidates.length === 0 && <div>No Such Candidates :(</div>}
        </div>
      </React.Fragment>
    )
}

export default Shortlisted
