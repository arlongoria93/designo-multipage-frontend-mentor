"use client";
import Footer from "@/components/Footer/Footer";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const body = {
      name,
      email,
      phone,
      message,
    };

    const res = await fetch("/api/form", {
      method: "POST",
      body: JSON.stringify(body),
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <>
      {/* Form */}
      <div className="flex flex-col ">
        <form onSubmit={submitHandler}>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
