import React from 'react';

const Form = (props) => {
    return (
        <div>
            <input type={props.type} placeholder={props.placeholder}/>    
        </div>
    )
};

export default Form;