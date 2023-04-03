import styled from "styled-components";
import Card from "react-bootstrap/Card";

export const ContainerGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
