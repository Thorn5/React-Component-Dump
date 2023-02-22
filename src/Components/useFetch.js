import {useState, useEffect} from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)



  useEffect(() => {

    const fetchData = () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((err) => {
          setError(err)
          console.error(`Error: ${error}`)
        })
        .finally(() => {
          setLoading(false)
          console.log(data);
        })
    }
    fetchData()
  }, []);

  return(
    <div>
      {loading ? (<>Loading...</>) : (error ? (`Error: ${error}`) : [data]) }
    </div>
  )
};

export default useFetch