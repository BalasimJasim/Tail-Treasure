import React, { useEffect, useState } from "react";
// import CartPayment from "./CartPayment";
import "./CartDelivery.scss";
import { Steps } from "./constants";
import { useUserContext } from "../../contexts/UserContext";
function CartDelivery({ goTo }) {
  const { state } = useUserContext();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    postcode: "",
    city: "",
  });
  const [showForm, setShowForm] = useState(true);
  // const [showPayment, setShowPayment] = useState(false);
  useEffect(() => {
    if (state.user) {
      setFormData((prev) => ({
        ...prev,
        firstName: state.user.firstName || "",
        lastName: state.user.lastName || "",
      }));
    }
  }, [state.user]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowForm(false);
    // goTo(Steps.third);
    // setShowPayment(true);
  };

  const handleEdit = () => {
    setShowForm(true);
    // setShowPayment(false);
  };

  const onNextStep = () => {
    goTo(Steps.third);
  };

  return (
    <>
      {showForm ? (
        <div className="deliv-cont">
          <div className="text-center fs-2">Delivery to</div>
          <form onSubmit={handleSubmit}>
            <p>First name*</p>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <p>Last name*</p>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <p>Address line*</p>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            <p>Postcode*</p>
            <input
              type="number"
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
            />
            <p>Town / City*</p>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            <button className="btn-save" type="submit">
              SAVE
            </button>
          </form>
          <p>*mandatory field</p>
        </div>
      ) : (
        <>
          <p className="text-center fs-2">Delivery to</p>
          <div className="deliv-info">
            <p>First Name: {formData.firstName}</p>
            <p>Last Name: {formData.lastName}</p>
            <p>Address: {formData.address}</p>
            <p>Postcode: {formData.postcode}</p>
            <p>City: {formData.city}</p>
            <button className="btn-change" onClick={handleEdit}>
              Change Data
            </button>
          </div>

          <button onClick={onNextStep}>Next</button>
        </>
      )}
    </>
  );
}

export default CartDelivery;
