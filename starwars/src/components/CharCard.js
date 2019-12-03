import React from "react";
import { Col, Card, CardBody, CardImg, CardHeader, CardText } from "reactstrap";

const CharCard = ({ charInstance }) => {
  return (
    <Col xs="6" md="4" lg="3">
      <Card>
        <CardImg
          src="http://i.imgur.com/kw6Rlkl.jpg"
          rounded
          alt="star wars img"
        />
        <CardHeader tag="h3">{charInstance.name}</CardHeader>
        <CardBody>
          <CardText>Birth Year: {charInstance.birth_year}</CardText>
          <CardText>Gender: {charInstance.gender}</CardText>
          <CardText>Height: {charInstance.height} centimeters</CardText>
          <CardText>Mass: {charInstance.mass} kilos</CardText>
          <CardText>Skin Color: {charInstance.skin_color}</CardText>
          <CardText>Hair Color: {charInstance.hair_color}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CharCard;
