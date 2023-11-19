"use client";

import React from "react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [desc, setdesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phone, name, email, desc);
    const data = { phone, name, email, desc };

    fetch("http://localhost:3000/api/postcontact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
        toast.success("Email sent!");
        setphone("");
        setname("");
        setdesc("");
        setemail("");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Something went wrong!");
      });
  };

  const handleChange = (e) => {
    if (e.target.name == "phone") {
      setphone(e.target.id);
    } else if (e.target.name == "email") {
      setemail(e.target.id);
    } else if (e.target.name == "desc") {
      setdesc(e.target.id);
    } else if (e.target.name == "name") {
      setname(e.target.id);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 space-y-4 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in"
    >
      <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
        <div className="grid w-full  items-center gap-1.5">
          <label htmlFor="name" className="">
            Your Name
          </label>
          <input
            // value={name}
            onChange={handleChange}
            id="name"
            name="name"
            aria-describedby="emailHelp"
            className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
          />
          {/* {error.name?.message && (
        <p className="ml-1 mt-1 text-sm text-red-400"></p>
      )} */}
        </div>
        <div className="grid w-full items-center gap-1.5">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            onChange={handleChange}
            name="email"
            id="email"
            aria-describedby="emailHelp"
            className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <label htmlFor="phone">Phone</label>
          <input
            type="phone"
            onChange={handleChange}
            name="phone"
            id="phone"
            className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
          />
          <p id="emailHelp" className="form-text grid w-full items-center">
            We'll never share your email & phone with anyone else.
          </p>
        </div>

        <div className="grid w-full items-center gap-1.5">
          <label htmlFor="desc">Elaborate your concern</label>
          <textarea
            onChange={handleChange}
            name="desc"
            id="desc"
            placeholder="What do you want to see and do? And tell us a bit about yourself..."
            rows={4}
            className="w-full outline-none mt-4 border-0 p-0 mx-0 focus:ring-0  placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
          />
          {/* {error.message?.message && <p className="ml-1 text-sm text-red-400"></p>} */}
          <button
            type="submit"
            // disabled={isSubmitting}
            value="send request"
            className="mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer"
          >
            {/* {isSubmitting ? "Submitting..." : "Submit"} */}
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
