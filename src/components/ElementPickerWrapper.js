import styled from 'styled-components';

const ElementPickerWrapper = styled.div`
position: relative;

.options-container {
  position: absolute;
  top: 0;
  left: 100%;
  padding: 0;
  border: 1px solid #ccc;
  background: #fff;
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.2);
  width: 252px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  button {
    width: 50px;
    height: 50px;
    margin: 0;
    padding: 0;
    border-radius: 0;
    border: none;
    background: #efefef;
    text-align: center;
    font-size: 10px;
    transition: background 150ms ease-in-out;

    &:hover {
      transform: scale(1.0);
      background: #eae9e9;
    }
  }
}
`;

export default ElementPickerWrapper;