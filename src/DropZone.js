import React, { useState } from 'react';
import DropZoneWrapper from './components/DropZoneWrapper';

/* 
* Drop-area for draggable content, used to change order of text blocks.
*/

const DropZone = (props) => {

  const [hover, onHover] = useState(false);
  const [dropped, onDrop] = useState(false);

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