import React from 'react';
import './SectionB.css';

const SectionB = ({backgroundColor, children}) => {
    return(
        <div className="section-b" style={{ backgroundColor: backgroundColor }}>
            {children}
        </div>
    );
};

export default SectionB;