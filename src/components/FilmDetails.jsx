import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const FilmDetails = () => {
  const { filmid } = useParams;
  return <>This is FilmDetails</>;
};

export default FilmDetails;