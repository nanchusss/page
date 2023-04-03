import styled from "styled-components";

export const ContenedorColores = styled.div`
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Mybuttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  button {
    margin-right: 10px;
    margin-left: 10px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    background-color: #4caf50;
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #3e8e41;
    }

    &:focus {
      outline: none;
    }
  }
`;
