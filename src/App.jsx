import React, { useEffect, useState } from 'react'
import Card from './AppHtml.jsx'
import Cdata from './Links'

const App = () => {

  const [webseries, setWebseries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      async function getData() {

        const response = await fetch('https://webseriesbackend.onrender.com/api/auth/all')
        // const response = await fetch('http://localhost:8000/api/auth/all')
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setWebseries(data);
        setLoading(false);
        console.log(data);

      }
      getData();
    } catch (error) {
      setError(error);
      setLoading(false);

    }

  }, [])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h1 className="heading">Top Web Series</h1>
      {webseries.map((val) => {
        // console.log(val._id)
        return (
          <Card
            key={val._id}
            imgPoster={val.imgPoster}
            title={val.title}
            name={val.name}
            link={val.link}
          />
        )
      })}
    </>
  );
};

export default App;