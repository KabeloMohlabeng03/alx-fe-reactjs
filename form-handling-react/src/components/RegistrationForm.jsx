import React, { useState } from "react";

const RegistrationForm = () => {
  // State to handle form input values
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically set field values
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation for empty fields
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required.");
    } else {
      setError("");
      console.log("Form Submitted:", formData);
      // Add logic for actual submission (mock API call)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form (Controlled)</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username} // Controlled value for username
          onChange={handleChange} // Handle change in username field
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email} // Controlled value for email
          onChange={handleChange} // Handle change in email field
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password} // Controlled value for password
          onChange={handleChange} // Handle change in password field
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
