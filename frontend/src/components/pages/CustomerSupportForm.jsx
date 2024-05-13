/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../pages/customerSupportForm.css";
import support from "../../../images/support.jpg";

function CustomerSupportForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container-form">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name"></label>
            <input
              type="text"
              placeholder="Name:"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              placeholder="Email:"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message"></label>
            <textarea
              id="message"
              placeholder="Message:"
              value={message}
              onChange={handleMessageChange}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="image-container">
        <img src={support} alt="Support Image" />
      </div>
    </div>
  );
}

export default CustomerSupportForm;
