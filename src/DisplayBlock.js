import React, { useState, useEffect } from 'react';
import ToggleButton from './components/ToggleButton';

const DisplayBlock = (props) => {

  const initDisplayMode = localStorage.getItem('displayMode') === 'code' ? true : false ;
  const [displayRaw, toggleDisplay] = useState(initDisplayMode);

  useEffect(() => {
    const displayMode = displayRaw ? 'code' : 'formatted' ;
    localStorage.setItem('displayMode',displayMode);
    return () => {
      localStorage.removeItem('displayMode');
    }
  },[displayRaw]);
  
  const content = props.blocks.length > 0 
  ? props.blocks.map(block => `<${block.element}>${block.content}</${block.element}>`)
  : null ;

  return(
  <>
  <div>
    <ToggleButton onClick={() => toggleDisplay(!displayRaw)}>{displayRaw ? 'Abc..' : '</>' }</ToggleButton>
  </div>
  <article>
  {
    content === null
    ?  null
    :  displayRaw ? <pre style={{whiteSpace:'normal'}}>{content}</pre> : <div dangerouslySetInnerHTML={{ __html: content }}></div>
  }
  </article>
  </>
  )

}

export default DisplayBlock;