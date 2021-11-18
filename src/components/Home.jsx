import React, { useEffect, useState } from "react";
import Card from "./Card";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { candidates, loading } = useFetch();
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false)

  const handleSearch = (e) => {
    const candidate = candidates.filter((candidate) =>
      candidate.name.toLowerCase().includes(search.toLowerCase())
    );
    if(candidate.length === 0){
      setError(true)      
    }
    setSearch(search);
    setFilteredCandidates(candidate);
  };

  useEffect(() => {
    if (search !== "") {
      handleSearch();
    } else {
      setError(false)
      setFilteredCandidates(candidates);
    }
  }, [search]);

  return (
    <React.Fragment>
      <h1 className="page_title">All Candidates</h1>
      <hr />
      <div className="search_form">
        <input
          type="search"
          name="candidate_search"
          placeholder="Search Candidate"
          id="candidate_search"
          onChange={(e) => setSearch(e.target.value)}
        />
        {error && <small className='alert_message'>No Such Candidates :(</small>}
      </div>{" "}
      <div className="card_container">
        {filteredCandidates.length > 0 &&
          filteredCandidates.map((candidate) => (
            <Card key={candidate.id} candidate={candidate} />
          ))}
        {candidates.length > 0 && filteredCandidates.length === 0 ? (candidates.map((candidate) => (
            <Card key={candidate.id} candidate={candidate} />
          ))) : null}
        {loading && <div>Loading Candidates...</div>}
      </div>
    </React.Fragment>
  );
};

export default Home;
