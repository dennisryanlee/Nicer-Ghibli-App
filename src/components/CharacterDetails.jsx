import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  const { characterid } = useParams;
  return <>This is CharacterDetails</>;
};

export default CharacterDetails;
