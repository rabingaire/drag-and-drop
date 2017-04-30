import React from 'react';

const Pannel = ({ children, title }) => {
    return(
        <div>
            {title}
            {children}
        </div>
    )
}

export default Pannel;