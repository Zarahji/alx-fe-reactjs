// src/components/RegistrationForm.jsx
import React, { useState } from 'react';

const RegistrationForm = () => {
  // State for each input field
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // State for validation errors
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Initialize error object for this submission
    let formErrors = {};

    // Basic validation checks
    if (!username) {
      formErrors.username = 'Username is required';
    }
    if (!email) {
      formErrors.email = 'Email is required';
    }
    if (!password) {
      formErrors.password = 'Password is required';
    }

    // If any errors, update state and exit the submit handler
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // If validation passes, log the submitted data (or send to API)
    console.log('Registration Data:', { username, email, password });

    // Clear the form and errors after successful submission
    setUsername('');
    setEmail('');
    setPassword('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
