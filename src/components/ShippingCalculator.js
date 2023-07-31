import React, { useState } from 'react';
import Chart from './Chart';
import LoginForm from './LoginForm';
import '../styles.css'; // Import the styles.css file

const ShippingCalculator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [freightRates, setFreightRates] = useState([]);
  const [packageSize, setPackageSize] = useState('');
  const [destination, setDestination] = useState('');
  const [rate, setRate] = useState('');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const addFreightRate = () => {
    if (!packageSize || !destination || !rate) {
      alert('Please fill in all the fields.');
      return;
    }

    setFreightRates([...freightRates, { packageSize, destination, rate: parseFloat(rate) }]);
    setPackageSize('');
    setDestination('');
    setRate('');
  };

  return (
    <div>
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <div className="shipping-calculator-container">
          <h1>Admin Dashboard</h1>
          <div>
            <h2>Add Freight Rate</h2>
            <input
              type="text"
              placeholder="Package Weight"
              value={packageSize}
              onChange={(e) => setPackageSize(e.target.value)}
            />
            <input
              type="text"
              placeholder="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
            <input
              type="text"
              placeholder="Shipping Rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
            <button onClick={addFreightRate}>Add Rate</button>
          </div>
          <Chart freightRates={freightRates} />
        </div>
      )}
    </div>
  );
};

export default ShippingCalculator;
