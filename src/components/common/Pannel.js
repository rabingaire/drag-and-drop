import React from 'react';

const Pannel = ({ children, title }) => {
    return(
        <div className="medium-4 columns text-center pannel pd-10">
            {title}
            {children}
        </div>
    )
}

export default Pannel;