import React from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';

const cardSource = {
    beginDrag(props) {
        return {cardId: props.id};
    }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class  Card extends React.Component {
    render() {
        const { text, connectDragSource, isDragging} = this.props;
        return connectDragSource(
            <div className="card pd-20" style={{
                backgroundColor: isDragging ? 'red' : 'green',
                fontSize: 25,
                fontWeight: 'bold',
                cursor: 'move'
            }}>
                {text}
            </div>
        );
    }
}

Card.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
}

export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);