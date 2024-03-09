import React, { useRef } from "react";
import classes from "./Contact.module.css";
const Contact = () => {
  const name = useRef("");
  const email = useRef("");
  const phoneNumber = useRef("");

  const postDataOnFirebase = async (data) => {
    const res = await fetch(
      "https://movierating-65c20-default-rtdb.asia-southeast1.firebasedatabase.app/ecommerce.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        header: {
          "Content-Type": "application/json",
        },
      }
    );
    const resData = await res.json();
    console.log(resData);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name.current.value,
      email: email.current.value,
      phoneNumber: phoneNumber.current.value,
    };
    postDataOnFirebase(data);
    name.current.value = "";
    email.current.value = "";
    phoneNumber.current.value = "";
  };
  return (
    <div className={classes.contact}>
      <h1>Contact Us</h1>
      <form className={classes.contactForm} onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={name} />
        </div>
        <div>
          <label htmlFor="email">Email Id</label>
          <input type="email" id="email" ref={email} />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="number" id="phoneNumber" ref={phoneNumber} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
