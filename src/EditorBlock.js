import React, { useState } from 'react';

const EditorBlock = (props) => {
  
  // console.log(props);

  const [content, setContent] = useState('');

  const updateContent = (e) => {
    props.onChangeHandler(props.index, e.target.value);
    setContent(e.target.value);
  }

  return(
    <div>
      <div>{props.elementType ? props.elementType : null}</div>
      <form>
        <textarea 
        value={content} 
        onChange={(e) => updateContent(e)} />
      </form>
    </div>
  )

}

export default EditorBlock;