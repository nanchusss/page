import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

export const ContainerGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const StyledModal = styled(Modal)`
  .modal-dialog {
    max-width: 90%;
    margin: 100px auto;
  }
`;
export const StyledText = styled.p`
  margin-bottom: 5px;
  font-size: 16px;
`;
export const StyledTitle = styled.p`
  font-size: 22px;
  margin-bottom: 10px;
`;
export const DivText = styled.p`
  padding: 30px;
  display: flex;
  flex-direction: column;
`;
export const StyledCard = styled(Card)`
  border: none;
  text-align: center;
  width: 100%;
  max-width: 26rem;
  margin: 1rem;

  @media (min-width: 768px) {
    width: calc(50% - 2rem);
  }

  @media (min-width: 992px) {
    width: calc(33.33% - 2rem);
  }
`;
