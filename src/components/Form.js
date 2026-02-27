import React from 'react';

const Form = () => {
  return (
    <div>
      <h2>Basic Form Layout</h2>
      <form id="info-form">
        <div>
          <label htmlFor="full_name">Full Name</label>
          <input type="text" id="full_name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div>
          <label htmlFor="password_confirmation">Password Confirmation</label>
          <input type="password" id="password_confirmation" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;