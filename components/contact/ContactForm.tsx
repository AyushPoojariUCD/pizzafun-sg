"use client";

import { useState } from "react";

export default function ContactForm() {

  const [form, setForm] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(form);

    alert("Message sent successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-black rounded-xl p-10 shadow-lg"
    >

      <h2 className="text-2xl font-bold mb-8 text-center">
        Contact Us
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">

        <input
          name="name"
          placeholder="First Name"
          onChange={handleChange}
          className="border p-3 rounded-lg w-full"
          required
        />

        <input
          name="lastname"
          placeholder="Last Name"
          onChange={handleChange}
          className="border p-3 rounded-lg w-full"
          required
        />

        <input
          name="phone"
          placeholder="Contact Number"
          onChange={handleChange}
          className="border p-3 rounded-lg w-full"
          required
        />

        <input
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
          className="border p-3 rounded-lg w-full"
          required
        />

      </div>

      <textarea
        name="message"
        placeholder="Write your message..."
        rows={6}
        onChange={handleChange}
        className="border p-3 rounded-lg w-full mb-6"
        required
      />

      <div className="text-center">

        <button
          type="submit"
          className="bg-[#263142] text-white px-10 py-3 rounded-full hover:bg-yellow-400
                        hover:scale-[1.02]
                        hover:drop-shadow-[0_0_12px_rgba(255,200,0,0.6)]
                        cursor-default"
        >
          Submit
        </button>

      </div>

    </form>
  );
}