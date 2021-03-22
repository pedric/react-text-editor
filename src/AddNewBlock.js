import React from 'react';
import styled from 'styled-components';

const AddNewButton = styled.button`
  width: 100%;
  border-radius: 20px;
  background: #dbf4fb;
  border: 1px solid #61dafb;
  padding: 8px;
`;

/* 
* Buttoncomponent to add a new block for text input.
*/

const AddNewBlock = (props) => {

  return <AddNewButton onClick={props.handleClick}>Add content block</AddNewButton>
}

export default AddNewBlock;