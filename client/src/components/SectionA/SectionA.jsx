import React, { useEffect } from 'react';
import './SectionA.css';

const SectionA = ({ titleExpansion })=> {
  useEffect(() => {
    titleExpansion();
  }, [titleExpansion]);

  return (
    <div className="section-a">
      <h1>VERA</h1>
      <h3>Secure. Easy. Reliable.</h3>
    </div>
  );
};

export default SectionA;