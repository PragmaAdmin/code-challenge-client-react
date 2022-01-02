import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState({});

  useEffect(() => {
    const request = () =>
      fetch(`/temperature`)
        .then((response) => response.json())
        .then((response) => {
          setItems(response.temperatures);
        });

    setInterval(request, 5000);

    request();
  }, []);

  return (
    <div className="App">
      <h2>Beers</h2>
      <table>
        <thead>
          <tr>
            <th align="left">Product</th>
            <th align="left">Temperature</th>
            <th align="left">Status</th>
          </tr>
        </thead>
        <tbody>
          {(
              Object.keys(items).map((itemKey) => (
                <tr key={items[itemKey].id} id={items[itemKey].id}>
                  <td width={150}>{items[itemKey].name}</td>
                  <td width={150}>{items[itemKey].temperature}</td>
                  <td width={150}>{items[itemKey].status}</td>
                </tr>
              ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
