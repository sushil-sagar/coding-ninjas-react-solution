import React from 'react';

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your form submission logic here
    // For example, you can fetch data from the input fields and handle the login process
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
          
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Form;
