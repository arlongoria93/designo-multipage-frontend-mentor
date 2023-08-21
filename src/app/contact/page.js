"use client";

import React, { useState } from "react";
import AboutLocationCard from "@/components/AboutLocationCard";
import FooterContactUs from "@/components/FooterContactUs";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  }

  const submitHandler = async (e) => {
    // hadndle email validation

    if (validateEmail(email)) {
      console.log("Valid email address");
    } else {
      console.log("Invalid email address");
    }
    // make sure all fields are filled
    if (!name || !email || !phone || !message) {
      alert("Please fill out all fields.");
      return;
    }

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

    // clear form
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    if (result.status === 200) {
      alert("Message Sent.");
    } else if (result.status === 400) {
      alert("Message failed to send.");
    }
  };

  return (
    <>
      {/* Form */}
      <div className="flex flex-col items-center justify-center">
        <form
          onSubmit={submitHandler}
          className=" flex h-[764px] w-full flex-col items-center bg-[#E7816B]  md:h-[711px] md:w-[689px] md:rounded-2xl  lg:h-[480px] lg:w-[1111px] "
        >
          <div className="flex w-[327px] flex-col justify-center gap-[48px] md:w-[573px] lg:h-full  lg:w-full lg:flex-row lg:items-center lg:justify-between lg:px-[95px]">
            <div className="mt-[72px] flex w-full flex-col items-center justify-center gap-[24px] md:items-start">
              <h1 className="text-center text-[32px] text-white md:text-start">
                Contact Us
              </h1>
              <p className=" text-center text-[15px] leading-6 text-white md:text-start">
                Ready to take it to the next level? Let’s talk about your
                project or idea and find out how we can help your business grow.
                If you are looking for unique digital experiences that’s
                relatable to your users, drop us a line.
              </p>
            </div>
            <div className=" flex w-full flex-col lg:h-full lg:justify-center">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-b bg-[#E7816B] p-2 px-2 py-4 text-white  placeholder:pl-2 placeholder:text-white placeholder:opacity-50 hover:border-b-2 hover:border-white hover:placeholder:opacity-100 focus:outline-none"
              />
              {/* divider */}
              <input
                type="text"
                name="email"
                value={email}
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b bg-[#E7816B] p-2 px-2 py-4 text-white  placeholder:pl-2 placeholder:text-white placeholder:opacity-50 hover:border-b-2 hover:border-white hover:placeholder:opacity-100 focus:outline-none"
              />
              <input
                type="text"
                name="phone"
                value={phone}
                placeholder="Phone"
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border-b bg-[#E7816B] p-2 px-2 py-4 text-white  placeholder:pl-2 placeholder:text-white placeholder:opacity-50 hover:border-b-2 hover:border-white hover:placeholder:opacity-100 focus:outline-none"
              />
              <textarea
                type="text"
                name="message"
                value={message}
                placeholder="Your Message"
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border-b bg-[#E7816B] p-2 px-2 py-4 text-white  placeholder:pl-2 placeholder:text-white placeholder:opacity-50 hover:border-b-2 hover:border-white hover:placeholder:opacity-100 focus:outline-none"
              />
              <button
                type="submit"
                className="mt-10 h-[56px] w-[152px] self-center rounded-lg bg-white hover:bg-[#FFAD9B] hover:text-white focus:outline-none md:self-end"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </form>
        <div className="mx-auto mt-[120px] flex flex-col items-center justify-center gap-[48px] text-center lg:w-[1110px] lg:flex-row lg:gap-[30px]">
          <AboutLocationCard location="Canada" />
          <AboutLocationCard location="Australia" />
          <AboutLocationCard location="United Kingdom" />
        </div>
      </div>

      <FooterContactUs />
    </>
  );
};

export default Contact;
