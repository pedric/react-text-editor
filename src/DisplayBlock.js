import React, { useState } from 'react';

const DisplayBlock = (props) => {
  
  const content = props.blocks.length > 0 
  ? props.blocks.map(block => `<${block.element}>${block.content}</${block.element}>`)
  : null

  return(
    content === null
    ?  null
    :  <div dangerouslySetInnerHTML={{ __html: content }}></div>
  )

}

export default DisplayBlock;