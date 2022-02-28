import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const LocationDetails = () => {
  const { locationidid } = useParams;
  return <>This is LocationDetails</>;
};

export default LocationDetails;
