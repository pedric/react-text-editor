import React, { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
position: relative;

.options-container {
  position: absolute;
  top: 0;
  left: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  background: #fff;
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.2);
  width: 300px;
}
`;

const ElementPicker = (props) => {

  const [visibleOptions, setOptionsVisibility] = useState(false);

  const handleOptions = (el) => {
    console.log(el);
    props.onChangeHandler(props.index,el);
  }

  const elements = ['h1','h2','h3','h4','h5','h6','strong','p','blockquote','pre','code'];

  return (
    <Div>
    <button className='btn btn--round' onClick={() => setOptionsVisibility(!visibleOptions)}>Edit</button>
    {
      visibleOptions 
      ? <div className='options-container'>{elements.map(el => <button onClick={() => handleOptions(el)}>{el}</button>)}</div>
      : null
    }
    </Div>
  )

}

export default ElementPicker;