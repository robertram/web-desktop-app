import React, { useState } from "react";
import Draggable from 'react-draggable';
import styled from 'styled-components';

class SimpleDraggable extends React.Component {
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: -400, y: 200
    }
  };

  handleDrag = (e, ui) => {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  };

  onStart = () => {
    this.setState({activeDrags: ++this.state.activeDrags});
  };

  onStop = () => {
    this.setState({activeDrags: --this.state.activeDrags});
  };

  // For controlled component
  adjustXPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const {x, y} = this.state.controlledPosition;
    this.setState({controlledPosition: {x: x - 10, y}});
  };

  adjustYPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const {controlledPosition} = this.state;
    const {x, y} = controlledPosition;
    this.setState({controlledPosition: {x, y: y - 10}});
  };

  onControlledDrag = (e, position) => {
    const {x, y} = position;
    this.setState({controlledPosition: {x, y}});
  };
 
  onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position);
    this.onStop();
  };

  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {deltaPosition, controlledPosition} = this.state;
    return (
      <styles.SimpleDraggable className="Desktop" padding={this.props.padding}>
        <Draggable {...dragHandlers}>
          <div className="box">{this.props.children}</div>
        </Draggable>
    </styles.SimpleDraggable>
    );
}
}

const styles = {};

styles.SimpleDraggable = styled.div`
width: 100%;
.box{
  border: solid black 2px;
  width: 100px;
  border-radius: 10px;
  background-color: white;
  padding: ${props => props.padding};
  text-align: center;
}
  
`;

export default SimpleDraggable;