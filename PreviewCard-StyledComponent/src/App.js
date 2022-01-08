import styled from "styled-components";
import GlobalStyle from "./style/global";
import { Container, colors, fonts } from "./style/utils";

import image from "./style/images/image-header-mobile.jpg";
import Stat from "./components/Stat";

const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.darkBlue};
  font-family: ${fonts.inter};
  border-radius: 8px;
  overflow: hidden;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: max-content;
    max-width: 1100px;
  }
`;

const ImageContainer = styled.section`
  position: relative;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  height: 240px;

  @media (min-width: 768px) {
    height: 480px;
  }

  @media (min-width: 1200px) {
    order: 1;
    height: auto;
    /* background-position: -150px 0px; */
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background-color: ${colors.softViolet};
    opacity: 0.5;
  }
`;

const TextContent = styled.section`
  text-align: center;
  margin-top: 2rem;
  padding: 1rem;
  @media (min-width: 768px) {
    padding: 2rem;
  }
  @media (min-width: 1200px) {
    margin-top: 0;
    text-align: left;
    padding: 4rem;
    width: 90%;
  }
  h1 {
    font-size: 28px;
    color: ${colors.white};
    line-height: 1.4;
    span {
      color: ${colors.softViolet};
    }
  }
  p {
    color: ${colors.mainTransparent};
    margin: 1rem 0 2rem 0;
    font-size: 14px;
    line-height: 1.7;
  }
`;

const Stats = styled.section`
  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4rem;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Card>
          <ImageContainer />

          <TextContent>
            <h1>
              Get <span>insights</span> that help your business grow.
            </h1>
            <p>
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
            <Stats>
              <Stat title="10k+" body="companies" />
              <Stat title="314" body="templates" />
              <Stat title="12m+" body="queries" />
            </Stats>
          </TextContent>
        </Card>
      </Container>
    </>
  );
};

export default App;
