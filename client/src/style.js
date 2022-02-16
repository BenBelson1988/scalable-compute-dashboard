import styled from "styled-components";

export const AppContainer = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Heebo:100,200,300,400,500,600,700&display=swap");
  font-family: "Heebo", sans-serif;
  height: 100vh;
  width: 100vw;
  background: #f1f1f1;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
