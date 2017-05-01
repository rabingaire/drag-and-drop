import React from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';

const pannelTarget = {
  drop(props, monitor) {
      props.handlePannelClick(props.newPosition);
      monitor.getItem();
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class Pannel extends React.Component {
    render() {
        const { title, children, connectDropTarget, isOver } = this.props;
        
        return connectDropTarget(
            <div style={{
                position: 'relative',
                width: '100%',
                height: '100%'
            }}>
                {title}
                {children}
                {isOver &&
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        zIndex: 1,
                        opacity: 0.5,
                        backgroundColor: 'yellow',
                    }} />
                }
            </div>
        )
    }
}

Pannel.propTypes = {
  isOver: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.CARD, pannelTarget, collect)(Pannel);