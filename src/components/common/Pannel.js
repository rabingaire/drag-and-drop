import React from 'react';

class Pannel extends React.Component {
    render() {
        const { title, children } = this.props;
        
        return (
            <div>
                {title}
                {children}
            </div>
        )
    }
}

export default Pannel;