import BeerDetails from "./BeerDetails";

const BeersList = ({beers}) => {
  return (
    <>
      <h2>Beers</h2>

      {beers.length === 0 && (
        <h3>There are no beers available to list...</h3>      
      )}

      {beers.length > 0 && (
        <table>
          <thead>
            <tr>
              <th align="left">Product</th>
              <th align="left">Temperature</th>
              <th align="left">Status</th>
            </tr>
          </thead>
          <tbody>            
            {beers.map(beer => (
              <BeerDetails key={beer.id} beer={beer} />
            ))}
          </tbody>
        </table>
      )}      
    </>      
  )
};

export default BeersList;
