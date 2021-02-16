import React from 'react';
import './PetCard.css';
import { IsAdopted } from '../IsAdopted/IsAdopted';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon,
  MDBView,
} from 'mdbreact';

const PetCard: React.FC<IPetProps> = ({ pet }) => {
  if (!pet) {
    return null;
  }
  console.log(pet);
  return (
    <div>
      <MDBCol style={{ maxWidth: '22rem' }}>
        <MDBCard wide cascade>
          <MDBView cascade>
            <IsAdopted isAdopted={pet.isAdopted} />
            <MDBCardImage
              hover
              overlay="white-slight"
              className="card-img-top pet-image"
              src={pet.primaryPicture}
              alt="Card cap"
            />
          </MDBView>
          <MDBCardBody>
            <MDBCardTitle>{pet.name}</MDBCardTitle>
            <MDBCardText>Gender: {pet.gender}</MDBCardText>
            <MDBCardText>Age: {pet.age}</MDBCardText>
            <MDBCardText>Type: {pet.animalType}</MDBCardText>
            <MDBCardText>Breed: {pet.breed}</MDBCardText>
          </MDBCardBody>
          <div className="rounded-bottom mdb-color lighten-3 text-center pt-3 blue-gradient">
            <ul className="list-unstyled list-inline font-small">
              <li className="list-inline-item pr-2 white-text">
                <MDBIcon far icon="clock" /> 05/10/2015
              </li>
            </ul>
          </div>
        </MDBCard>
      </MDBCol>
    </div>
  );
};

export default PetCard;
