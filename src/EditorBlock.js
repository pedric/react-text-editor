import React, { useState, useEffect } from 'react';
import ElementPicker from './ElementPicker';

const EditorBlock = (props) => {

  const [content, setContent] = useState('');
  const [draggable,handleDrag] = useState(false);
  const [placeHolder, setPlaceHolder] = useState('');

  useEffect(() => {
    setPlaceHolder(`Type to edit. This is now a ${props.elementType}-element, click "edit" to change.`);
    // props.onChangeHandler(props.index, props.content);
    // setContent(props.content);
    return () => {
      setContent('');
    }
  },[placeHolder]);

  const updateContent = (e) => {
    props.onChangeHandler(props.index, e.target.value);
    setContent(e.target.value);
  }

  const startDrag = (e) => {
    handleDrag(true);
    // e.dataTransfer.setData("element", e.target);
  }

  const stopDrag = () => {
    handleDrag(false);
  }

  return(
    <div
    id={`editorblock-${props.index}`} 
    draggable={draggable ? 'true' : 'false'} 
    onDragStart={(e) => e.dataTransfer.setData("index", props.index)}>
      <div>
        {props.elementType ? <h2>{props.elementType}</h2> : null}
        </div>
      <div className='form-wrapper'>
        <div className='control-panel'>
          <button className='btn btn--round' onFocus={startDrag} onBlur={stopDrag}>Move</button>
          <ElementPicker index={props.index} onChangeHandler={props.updateElement} />
          <button id={`delete-button-${props.index}`} className='btn btn--alert btn--round' onClick={() => props.deleteHandler(props.index)}>Delete</button>
        </div>
        <form>
          <textarea
          placeholder={placeHolder}
          value={content} 
          onChange={(e) => updateContent(e)} />
        </form>
      </div>
    </div>
  )

}

export default EditorBlock;