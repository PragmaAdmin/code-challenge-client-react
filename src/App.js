import { useEffect, useState } from 'react';
import BeersList from './BeersList';

const App = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const getBeersTemperature = () => {
      beers.forEach((beer) => 
        fetch(`http://localhost:8082/temperature/${beer.id}`)
          .then((response) => response.json())
          .then((response) =>
            setBeers((prevBeers) => {
              const index = prevBeers.findIndex(b => {
                return b.id === beer.id;
              });
  
              console.log(response);
              const newBeers = [...prevBeers];
              newBeers[index] = {...beer, ...response};            
              return newBeers;
            })
          )
      );
    };

    fetch(`http://localhost:8082/beers`)
      .then((response) => response.json())
      .then((response) => {
        setBeers(response.beers ? response.beers : []);
        
        getBeersTemperature();
        setInterval(getBeersTemperature, 1000 * 5);
      });
  }, []);

  return (
    <div className="App">
      <BeersList beers={beers} />
    </div>
  );
}

export default App;
