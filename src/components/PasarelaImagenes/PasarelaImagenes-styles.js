import styled from "styled-components";

export const Subtitulo = styled.div`
  font-size: 38px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 0px;
  }
`;

export const Titulo = styled.div`
  font-size: 70px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-top: 40px;
  }
`;

export const styles = {
  img: {
    maxHeight: "700px",
    objectFit: "cover",
    verticalAlign: "bottom",
  },
};
