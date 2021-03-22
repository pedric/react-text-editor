import React, { useState } from 'react';
import ElementPickerWrapper from './components/ElementPickerWrapper';

const ElementPicker = (props) => {

  const [visibleOptions, setOptionsVisibility] = useState(false);

  const handleOptions = (el) => {
    props.onChangeHandler(props.index,el);
    setOptionsVisibility(!visibleOptions);
  }

  const elements = ['h1','h2','h3','h4','h5','h6','strong','p','blockquote','pre','code','div','small'];

  return (
    <ElementPickerWrapper>
    <button className='btn btn--round' onClick={() => setOptionsVisibility(!visibleOptions)}>Edit</button>
    {
      visibleOptions 
      ? <div className='options-container'>{elements.map( (el,index) => <button key={`btn-${index}`} onClick={() => handleOptions(el)}>{el}</button>)}</div>
      : null
    }
    </ElementPickerWrapper>
  )

}

export default ElementPicker;