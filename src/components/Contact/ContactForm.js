"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const processForm = async (data) => {
    const result = await sendEmail(data);

    if (result?.success) {
      console.log({ data: result.data });
      toast.success("Email sent!");
      reset();
      return;
    }

    // toast error
    console.log(result?.error);
    toast.error("Something went wrong!");
  };

  return (
    <form
      onSubmit={handleSubmit(processForm)}
      className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in"
    >
      Name:
      <input
        placeholder="name"
        {...register("name")}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      {errors.name?.message && (
        <p className="ml-1 mt-1 text-sm text-red-400"></p>
      )}
      Email
      <input
        placeholder="email"
        {...register("email")}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      {errors.email?.message && (
        <p className="ml-1 mt-1 text-sm text-red-400"></p>
      )}
      Message..
      <textarea
        {...register("travel details")}
        placeholder="What do you want to see and do? And tell us a bit about yourself..."
        rows={3}
        className="w-full outline-none mt-4 border-0 p-0 mx-0 focus:ring-0  placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      {errors.message?.message && <p className="ml-1 text-sm text-red-400"></p>}
      <button
        disabled={isSubmitting}
        value="send request"
        className="mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
