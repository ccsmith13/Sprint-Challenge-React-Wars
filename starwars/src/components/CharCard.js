import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
  background-color: black;
`;

const CharCardContainer = styled.div`
  background-color: white;
  color: black;
  width: 150px;
`;

const CharCard = ({ charInstance }) => {
  return (
    <CharCardContainer>
      <Title>{charInstance.name}</Title>
      <p>Birth Year: {charInstance.birth_year}</p>
      <p>Gender: {charInstance.gender}</p>
      <p>Height: {charInstance.height} centimeters</p>
      <p>Mass: {charInstance.mass} kilos</p>
      <p>Skin Color: {charInstance.skin_color}</p>
      <p>Hair Color: {charInstance.hair_color}</p>
    </CharCardContainer>
  );
};

export default CharCard;
