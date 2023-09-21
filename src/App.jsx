import React from 'react'
import Card from './AppHtml.jsx'
import Cdata from './Links'

const App = () => {
  return (
    <>
      <h1 className="heading">List of top 8 web series in 2021</h1>
      {Cdata.map((val) => {
        console.log(val.id)
        return (
          <Card
            key={val.id}
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