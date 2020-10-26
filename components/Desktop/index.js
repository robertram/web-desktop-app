import React, { useState } from "react";
import styled from 'styled-components';
import variables from '../../static/variables';
import SimpleDraggable from '../shared/SimpleDraggable';

const Desktop = ({ }) => {
  return (
    <styles.Desktop className="Desktop" >
      <SimpleDraggable padding={'200px'}>
        Hola mundo
      </SimpleDraggable>
      <SimpleDraggable padding={'200px'}>asdasd</SimpleDraggable>
    </styles.Desktop>
  )
}

const styles = {};

styles.Desktop = styled.div`
  background-color: red;
  width: 100%;
  height: 100vh;
  
`;

export default Desktop;