import styled from 'styled-components';

const DropZoneWrapper = styled.div`
  height: 20px;
  border: 1px dashed #ccc;
  margin: 16px auto;
  color: #ccc;
  font-size: 14px;
  transition: all 500ms ease-in-out;

  &.active {
    background: #dbf4fb;
    height: 60px;
  }
`;

export default DropZoneWrapper;