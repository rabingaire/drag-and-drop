import React from 'react';


const Button = (props) => {
    return (
        <div className="text-center">
            <a href="#" className="button">{props.value}</a>
        </div>
    )
};

export default Button;