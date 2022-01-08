import styled from "styled-components";

// Helpers
export const Container = styled.div`
  padding: 2rem;
  @media (min-width: 768px) {
    padding: 4rem;
  }
`;

// Colors
export const colors = {
  veryDarkBlue: "hsl(233, 47%, 7%)", // Main bg
  darkBlue: "hsl(244, 38%, 16%)", // Card bg
  softViolet: "hsl(277, 64%, 61%)",
  white: "hsl(0, 0%, 100%)", // Heading
  mainTransparent: "hsla(0, 0%, 100%, 0.75)",
  statHeading: "hsla(0, 0%, 100%, 0.6)",
};

// Fonts
export const fonts = {
  inter: "'Inter', sans-serif;",
  lexend: "'Lexend Deca', sans-serif;",
};
