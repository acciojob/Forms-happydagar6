import React, { useRef } from "react";

const FormRef = () => {

    const fullNameReference = useRef(null);
    const emailReference = useRef(null);
    const passwordReference = useRef(null);
    const passwordConfirmationReference = useRef(null);

    const handleFormSubmission = (event) => {
        event.preventDefault();

    }
  return (
    <div>
      <h2>Form using useRef</h2>
      <form id="info-form" onSubmit={handleFormSubmission}>
        <div>
          <label htmlFor="full_name">Full Name</label>
          <input type="text" id="full_name" ref={fullNameReference} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailReference} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordReference} />
        </div>

        <div>
          <label htmlFor="password_confirmation">Password Confirmation</label>
          <input type="password" id="password_confirmation" ref={passwordConfirmationReference} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormRef;