import React, { useState } from "react";
import "./styles.css"; // Import CSS file for styling

const XModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    dob: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = () => {
    if (
      !formData.username ||
      !formData.email ||
      !formData.dob ||
      !formData.phone
    ) {
      alert("Please fill out all the fields.");
      return;
    }

    if (!formData.email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (formData.phone.length !== 10 || isNaN(formData.phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    const dobDate = new Date(formData.dob);
    const currentDate = new Date();

    if (dobDate > currentDate) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    // Reset form data and close modal
    setFormData({
      username: "",
      email: "",
      dob: "",
      phone: "",
    });
    setIsOpen(false);
  };

  return (
    <div className="modal">
      <h1>User Details Modal</h1>
      <button onClick={() => setIsOpen(true)}>Open Form</button>
      {isOpen && (
        <div className="modal-content">
          <form>
            <div className="form-group">
              <h2>Username:</h2>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <h2>Email:</h2>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <h2>Phone Number:</h2>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <h2>Date of Birth:</h2>
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleInputChange}
                required
              />
            </div>
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          </form>
          <div className="modal-close" onClick={() => setIsOpen(false)}></div>
        </div>
      )}
    </div>
  );
};

export default XModal;
