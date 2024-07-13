import React from 'react'
import './FeatureBoxes.css';

const FeatureBoxes = () => {
    return (
      <div className="feature-container">
        <div className="box">
          <h3>Send Digital Keys</h3>
          <p>Easily send digital keys directly to your guests' Apple Wallets for instant access.</p>
        </div>
        <div className="line"></div>
        <div className="box">
          <h3>Integrate with Existing Systems</h3>
          <p>Seamlessly connect with Verkada, Avancir, Dormakaba, and other RFID key software.</p>
        </div>
        <div className="line"></div>
        <div className="box">
          <h3>Enhanced Security</h3>
          <p>Ensure secure key management with keys that automatically expire at the end of the stay.</p>
        </div>
        <div className="line"></div>
        <div className="box">
          <h3>Cost Savings</h3>
          <p>Reduce staffing costs and eliminate the need for physical key drop-offs, saving hundreds of hours.</p>
        </div>
      </div>
    );
  };
  

export default FeatureBoxes;