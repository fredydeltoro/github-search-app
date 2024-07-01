import { useState, useEffect } from "react";

const useSearch = (endpoint, query, page = 1, perPage = 2) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    if (query) {
      setLoading(true);
      setError(null);
      fetch(
        `https://api.github.com/search/${endpoint}?q=${query}&page=${page}&per_page=${perPage}`
      )
        .then((response) => response.json())
        .then((data) => {
          setResults(data.items || []);
          setTotalCount(data.total_count || 0);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    } else {
      setResults([]);
      setTotalCount(0);
    }
  }, [endpoint, query, page, perPage]);

  return { results, totalCount, loading, error };
};

export default useSearch;
