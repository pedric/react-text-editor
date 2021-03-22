import React, { useState, useEffect, useRef } from 'react';
import ToggleButton from './components/ToggleButton';
import ArticleDiv from './components/ArticleDiv';

/* 
* Component that displays the entered content, toggles between rendered or pre.
* Testing the useRef hook here to set a "terminal ish" style to pre-mode. 
*/

const DisplayBlock = (props) => {

  const articleElement = useRef();

  const initDisplayMode = localStorage.getItem('displayMode') === 'code' ? true : false ;
  const [displayRaw, toggleDisplay] = useState(initDisplayMode);

  useEffect(() => {
    const displayMode = displayRaw ? 'code' : 'formatted' ;
    localStorage.setItem('displayMode',displayMode);
    if(displayMode === 'code'){
      articleElement.current.style.background = '#282c34';
      articleElement.current.style.color = '#61dafb';
      articleElement.current.style.fontSize = '18 px';
      articleElement.current.style.padding = '4px';
      articleElement.current.style.marginTop = '18px';
    } else {
      articleElement.current.style = '';      
    }
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
  <article ref={articleElement}>
  {
    content === null
    ?  null
    :  displayRaw ? <pre style={{whiteSpace:'normal'}}>{content}</pre> : <ArticleDiv dangerouslySetInnerHTML={{ __html: content.join(' ') }}></ArticleDiv>
  }
  </article>
  </>
  )

}

export default DisplayBlock;