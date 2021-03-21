import React, { useState } from 'react';
import styled from 'styled-components';

const DropZone = (props) => {

  const Div = styled.div`
    height: 20px;
    border: 1px dashed #ccc;
    margin: 16px auto;
    color: #ccc;
    font-size: 14px;
    transition: all 500ms ease-in-out;

    &.active {
      background: #dbf4fb;
      height: 60px;
    }
  `;

  const [hover, onHover] = useState(false);
  const [drop, onDrop] = useState(null);

  return(
    <Div 
    className={hover ? 'active' : ''} 
    data-index={props.index} 
    onDragLeave={() => onHover(false)} 
    onDragEnter={() => onHover(true)}>
      Drop block here to change order
    </Div>
  )
}

export default DropZone;