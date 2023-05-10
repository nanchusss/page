import styled from "styled-components";
import { Card, Modal } from "react-bootstrap";

export const BlogContainer = styled.div`
  margin-top: 100px;
  padding-top: 20px;
  max-width: 1200px;
  padding: 20px;
`;

export const Title = styled.title`
  padding-top: 20px;
  margin-top: 50px;
  margin: 0 auto;
  padding: 20px;
  color: black;
  font-size: 55px;
`;

export const BlogRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

export const BlogColumn = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 10px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const BlogCard = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 30px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  @media screen and (min-width: 768px) {
    height: 250px;
  }
  @media screen and (min-width: 992px) {
    height: 300px;
  }
  @media screen and (min-width: 1200px) {
    height: 350px;
  }
`;

export const BlogTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #2b2b2b;
  margin-bottom: 40px;
`;

export const CenteredModal = styled(Modal)`
  .modal-dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    margin-right: auto;
    margin-left: auto;
    max-width: 90%;
  }

  .embed-responsive-item {
    width: 100%;
    height: 500px;
  }
`;
