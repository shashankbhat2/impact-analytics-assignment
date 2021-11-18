import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Candidate = () => {
  const [candidate, setCandidate] = useState({});
  const [shortlisted, setShortlisted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [message, setMessage] = useState('')
  const { id } = useParams();
  const { candidates } = useFetch();
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCandidate = () => {
      let storedCandidates =
        JSON.parse(localStorage.getItem("candidates") || "[]") || [];
      const selectedCandidate = storedCandidates.filter(
        (candidate) => candidate.id === id
      );
      setCandidate(selectedCandidate[0]);
    };

    fetchCandidate();
  }, [candidates]);

  const handleShortlist = () => {
    setShortlisted(true);
    setRejected(false);
    let storedCandidates =
      JSON.parse(localStorage.getItem("candidates") || "[]") || [];
    const selectedCandidate = storedCandidates.filter(
      (candidate) => candidate.id === id
    );
    const updateSelectedCandidate = {
      ...selectedCandidate[0],
      rejected: false,
      shortlisted: true,
    };
    const updatedStoredCandidates = storedCandidates.filter(
      (candidate) => candidate.id !== id
    );
    updatedStoredCandidates.push(updateSelectedCandidate);
    localStorage.setItem("candidates", JSON.stringify(updatedStoredCandidates));
    setMessage('Shortlisted Candidate')
    setTimeout(() => navigate('/'), 1000)
  };

  const handleReject = () => {
    setRejected(true);
    setShortlisted(false);
    let storedCandidates =
      JSON.parse(localStorage.getItem("candidates") || "[]") || [];
    const selectedCandidate = storedCandidates.filter(
      (candidate) => candidate.id === id
    );
    const updateSelectedCandidate = {
      ...selectedCandidate[0],
      rejected: true,
      shortlisted: false,
    };
    const updatedStoredCandidates = storedCandidates.filter(
      (candidate) => candidate.id !== id
    );
    updatedStoredCandidates.push(updateSelectedCandidate);
    localStorage.setItem("candidates", JSON.stringify(updatedStoredCandidates));
    setMessage('Rejected Candidate')
    setTimeout(() => navigate('/'), 1000)
  };

  return (
    <React.Fragment>
      <h3 className="page_title">Candidate Info</h3>
      <hr />
      {message && <h2 className='alert_message'>{message}</h2>}
      <div className="candidate_info_container">
        {candidate && (
          <>
            <div className="candidate_img">
              <img src={candidate.Image} alt={candidate.name} />
            </div>
            <div className="candidate_info">
              <small className="small_text">
                Id: <strong>#{id}</strong>
              </small>
              <h2 className="candidate_name">{candidate.name}</h2>
              <div className="candidate_options">
                <button
                  className={`btn success_btn ${
                    candidate.shortlisted || shortlisted ? "shortlisted" : ""
                  }`}
                  onClick={handleShortlist}
                >
                  {candidate.shortlisted || shortlisted
                    ? "Shortlisted"
                    : "Shortlist"}
                </button>
                <button
                  className={`btn danger_btn ${
                    candidate.rejected || rejected ? "rejected" : ""
                  }`}
                  onClick={handleReject}
                >
                  {candidate.rejected || rejected ? "Rejected" : "Reject"}
                </button>
              </div>
            </div>
          </>
        )}
        {!candidate && <div>Loading Candidate Info...</div>}
      </div>
    </React.Fragment>
  );
};

export default Candidate;
