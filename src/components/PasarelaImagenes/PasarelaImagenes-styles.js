import styled from "styled-components";

export const Subtitulo = styled.div`
  font-size: 30px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Titulo = styled.div`
  font-size: 70px;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export const styles = {
  img: {
    maxHeight: "600px",
    objectFit: "cover",
    verticalAlign: "bottom",
  },
};
