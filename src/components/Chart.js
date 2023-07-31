import React from 'react';
import '../styles.css'; // Import the styles.css file

const Chart = ({ freightRates, currency }) => {
  return (
    <div className="chart-container"> {/* Add the class name for container */}
      <h2>Shipping Rate Chart</h2>
      <table>
        <thead>
          <tr>
            <th>Package Weight</th>
            <th>Destination</th>
            <th>Shipping Rate</th>
          </tr>
        </thead>
        <tbody>
          {freightRates.map((rate, index) => (
            <tr key={index}>
              <td>{rate.packageSize}</td>
              <td>{rate.destination}</td>
              <td>{currency === 'usd' ? `$${rate.rate.toFixed(2)}` : `₹${rate.rate.toFixed(2)}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Chart;
