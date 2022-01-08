import styled from "styled-components";
import { colors } from "../style/utils";

const Parent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  @media (min-width: 1200px) {
    margin-bottom: 0;
    align-items: flex-start;
  }
`;

const Title = styled.h3`
  color: ${colors.white};
`;

const Body = styled.p`
  color: ${colors.statHeading};
  &&& {
    font-size: 12px;
  }
  @media (min-width: 1200px) {
    &&& {
      margin: 4px 0;
    }
  }
`;

const Stat = ({ title, body }) => {
  return (
    <Parent>
      <Title>{title.toUpperCase()}</Title>
      <Body>{body.toUpperCase()}</Body>
    </Parent>
  );
};

export default Stat;
