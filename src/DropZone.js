import React, { useState, useEffect } from 'react';
import DropZoneWrapper from './components/DropZoneWrapper';

const DropZone = (props) => {

  const [hover, onHover] = useState(false);
  const [dropped, onDrop] = useState(false);

  useEffect(() => {
    console.log(hover);
  },[hover]);

  const dropHandler = (e) => {
    onDrop(true);
    onHover(false);
    props.handleDrop(e);
  }

  return(
    <DropZoneWrapper
    data-dropped={dropped}
    className={hover ? 'active' : ''} 
    data-index={props.index}
    onDragOver={(e) => e.preventDefault()} 
    onDragLeave={() => onHover(false)} 
    onDragEnter={() => onHover(true)}
    onDrop={(e) => dropHandler(e)}>
      {dropped ? 'Element dropped!' : 'Drop block here to change order' }
    </DropZoneWrapper>
  )
}

export default DropZone;