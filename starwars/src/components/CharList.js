import React, { useEffect, useState } from "react";
import axios from "axios";
import CharCard from "./CharCard";

export default function CharList() {
  const [charData, setCharData] = useState([]);

  const didUpdate = props => {
    axios
      .get("https://swapi.co/api/people")
      .then(response => {
        console.log(response.data.results);
        setCharData(response.data.results);
      })
      .catch(error => console.log(error));
  };

  useEffect(didUpdate, []);

  return (
    <div>
      <div>
        {charData.map(charInstance => {
          return (
            <CharCard charInstance={charInstance} key={charInstance.created} />
          );
        })}
      </div>
    </div>
  );
}
