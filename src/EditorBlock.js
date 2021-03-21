import React, { useState } from 'react';
import ElementPicker from './ElementPicker';
import styled from 'styled-components';

const Div = styled.div`

  .form-wrapper{
    display: flex;
    justify-content: space-between;

    .control-panel{
      width: 60px;
    }

    button.btn.btn--round {
      width: 50px;
      height: 50px;
      border-radius: 25px;
      background: rgba(0,0,0,.05);
      border: 1px solid #ccc;
    }

    form {
      width: calc(100% - 70px);

      textarea {
        width: 100%;
        height: 200px;
        border: 1px solid #ccc;
        background: rgb(204 204 204 / 5%);
        resize: none;
      }
    }
  }

  .button-container {
    display: flex;
    justify-content: space-between;
  }

  button {
    margin: 8px 4px;
    border-radius: 10px;
    transition: transform 150ms ease-in-out;
    
    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
    
    &.btn {
      background: rgb(0 255 0 / 25%);
      border: 1px solid #58fb58;
  
      &.btn--alert.btn--round {
        background: #ff63474d;
        border: 1px solid #fb7057;
      }
    }
  }
`;

const EditorBlock = (props) => {
  
  // console.log(props);

  const [content, setContent] = useState('');
  const [draggable,handleDrag] = useState(false);

  const updateContent = (e) => {
    props.onChangeHandler(props.index, e.target.value);
    setContent(e.target.value);
  }

  const startDrag = () => {
    handleDrag(true);
  }

  const stopDrag = () => {
    handleDrag(false);
  }

  return(
    <Div draggable={draggable ? 'true' : 'false'}>
      <div>
        {props.elementType ? <h2>{props.elementType}</h2> : null}
        </div>
      <div className='form-wrapper'>
        <div className='control-panel'>
          <button className='btn btn--round' onFocus={startDrag} onBlur={stopDrag}>Move</button>
          <ElementPicker index={props.index} onChangeHandler={props.updateElement} />
          <button className='btn btn--alert btn--round' onClick={() => props.deleteHandler(props.index)}>Delete</button>
        </div>
        <form>
          <textarea 
          value={content} 
          onChange={(e) => updateContent(e)} />
        </form>
        </div>
    </Div>
  )

}

export default EditorBlock;