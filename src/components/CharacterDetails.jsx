import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CharacterDetails = (props) => {
  const { characterid } = useParams();
  const [characterData, setCharacterData] = useState();

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people/${characterid}`)
      .then((response) => response.json())
      .then((thisCharacter) => setCharacterData(thisCharacter));
  }, [characterid]);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div key={characterData?.id} className="card col-md-6">
            <div className="card-body">
              <h5 className="card-title">
                {characterData?.name}, {characterData?.gender}, {characterData?.age}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Eye-color: {characterData?.eye_color} | Hair-Color: {characterData?.hair_color}
              </h6>
              <p className="card-text">Appears in: </p>
              <footer className="blockquote-footer">
                <a className="btn btn-success btn-sm" href={characterData?.url} target="_blank">
                  View my JSON
                </a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterDetails;

{
  /* <Link to="/characters" className="btn btn-primary">
Back to Characters
</Link> */
}
