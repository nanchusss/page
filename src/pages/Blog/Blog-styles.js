import styled from "styled-components";
import { Card } from "react-bootstrap";

export const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
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

export const BlogCard = styled(Card)`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-size: cover;
  background-position: center;

  &:hover {
    cursor: pointer;
  }
`;

export const BlogTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #2b2b2b;
  margin-bottom: 40px;
`;
