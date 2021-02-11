import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';


const AdoptionForm = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4">Write to us</p>
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
          <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
        </div>
        <div className="text-center">
          <MDBBtn outline color="secondary">
            Send
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
    );
};

export default AdoptionForm;




















// import React from "react";
// import { useForm } from "react-hook-form";

// interface IFormInput {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// export default function AdoptForm() {
//   const { register, handleSubmit } = useForm<IFormInput>();
//   const onSubmit = (data: IFormInput) => console.log(data);
   
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input name="firstName" ref={register({ required: true, maxLength: 20 })} />
//       <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
//       <input name="age" type="number" ref={register({ min: 18, max: 99 })} />
//       <input type="submit" />
//     </form>
//   );
// }