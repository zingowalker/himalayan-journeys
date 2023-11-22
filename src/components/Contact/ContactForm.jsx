"use client";

import { useState } from "react";

export default function ContactForm() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("Submit");

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/postcontact", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          message: user.message,
        }),
      });
      // Set the status based on the response from the API route
      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          message: "",
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 space-y-4 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in"
    >
      <div className=" grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-1">
        <div className="grid w-full  items-center justify-start gap-1.5">
          <label htmlFor="username" className="">
            Your Name
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={user.username}
            onChange={handleChange}
            required
            className="outline-none border-0 p-0 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
          />
        </div>
        <div className=" grid w-full items-center gap-1.5">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={user.email}
            onChange={handleChange}
            required
            autoComplete="off"
            className="outline-none border-0 p-0 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
          />
          <p className="form-text grid w-full items-center justify-start">
            We'll never share your email with anyone else.
          </p>
        </div>

        <div className=" grid w-full items-center">
          <label htmlFor="message">Message...</label>
          <textarea
            name="message"
            id="message"
            rows={3}
            cols={3}
            value={user.message}
            onChange={handleChange}
            required
            autoComplete="off"
            placeholder="What do you want to see and do? And tell us a bit about yourself..."
            className="w-full outline-none mt-4 border-0 p-0 mx-0 focus:ring-0  placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
          />

          <button
            type="send"
            className="mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer"
          >
            {status}
          </button>
          <div className="flex flex-col">
            {status === "success" && (
              <p className="mb-2 text-green-800 text-sm">
                Message sent, thank you. We shall response shortly!
              </p>
            )}

            {status === "error" && (
              <p className="mb-2 text-sm text-red-400">
                There was an error submitting your message. Please try again.
              </p>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
