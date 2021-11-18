import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getCandidates = async () => {
      try {
        const res = await axios.get(
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
        );
        setCandidates(res.data);
        setLoading(false);
        const storedCandidates = res.data.map((c) => {
          return {shortlisted: false, rejected:false, ...c}
        })
        const existingCandidates = JSON.parse(localStorage.getItem("candidates") || "[]") || []
        if(existingCandidates.length === 0){
          localStorage.setItem("candidates", JSON.stringify(storedCandidates));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCandidates();
  }, []);

  return { candidates, loading, setCandidates };
};

export default useFetch;
