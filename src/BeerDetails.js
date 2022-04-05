
const BeerDetails = ({beer}) => {

  const getBeerDetailStyle = (status) => {
    if (status === 'OK') return {backgroundColor: 'lightgreen'};
    if (status === 'LOW') return {backgroundColor: 'lightblue'};
    if (status === 'HIGH') return {backgroundColor: '#ff9999'};
    return {};
  }

  return (
    <tr>
      <td width={150}>{beer.name}</td>
      <td width={150}>{beer.temperature != null ? beer.temperature : 'UNKNOWN'}</td>
      <td width={150} style={getBeerDetailStyle(beer.status)}>{beer.status}</td>
    </tr>
  )
};

export default BeerDetails;
