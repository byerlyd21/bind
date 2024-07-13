import React from 'react';
import './SectionB.css';

const SectionB = ({color, children}) => {
    return(
        <div className="section-b" style={{ backgroundColor: color }}>
            {children}
        </div>
    );
};

export default SectionB;