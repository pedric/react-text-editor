import React, { useState } from 'react';
import styled from 'styled-components';

const AddNewButton = styled.button`
  width: 100%;
  border-radius: 20px;
  background: #dbf4fb;
  border: 1px solid #61dafb;
  padding: 8px;
`;

const AddNewBlock = (props) => {

  return <AddNewButton onClick={props.handleClick}>Add content block</AddNewButton>
}

export default AddNewBlock;