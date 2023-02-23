import { useState, useEffect } from "react";

// Works just fine

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetch;

// use: const { data, loading, error } = useFetch(url);
// Parent return: (<>{loading ? (<p>Loading...</p>) : error ? `${error}` : <div> "data presentation" </div>}</>)
