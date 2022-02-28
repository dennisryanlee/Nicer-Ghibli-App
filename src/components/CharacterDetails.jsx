import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  const { characterid } = useParams;
  return <>This is CharacterDetails</>;
};

export default CharacterDetails;

{
  /* <Link to="/characters" className="btn btn-primary">
Back to Characters
</Link> */
}
