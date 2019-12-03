import React from "react";
import CharList from "./components/CharList";
import styled from "styled-components";

const Background = styled.div`
  background-image: url("https://wallpapercave.com/wp/wp2902991.jpg");
  overflow-x: hidden;
  background-size: stretch;
  background-repeat: repeat;
  padding: 0;
  margin: 0;
`;

const ReactWarsTitle = styled.h1`
  color: white;
  font-size: 4rem;
  text-align: center;
  margin-bottom: 5%;
  margin-top: 5%;
`;

const CharDiv = styled.div`
  margin-top: 5%;
`;

const App = () => {
  return (
    <div>
      <Background>
        <ReactWarsTitle>React Wars</ReactWarsTitle>
      </Background>
      <CharDiv>
        <CharList />
      </CharDiv>
    </div>
  );
};

export default App;
