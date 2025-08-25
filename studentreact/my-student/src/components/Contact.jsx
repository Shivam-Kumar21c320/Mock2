import React, { useState } from "react";
 
const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
 
  const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
 
  return (
    <section className="p-6 sm:p-10 bg-gray-50">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Contact Us</h2>
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg text-sm sm:text-base"
value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg text-sm sm:text-base"
value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border rounded-lg text-sm sm:text-base"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      ) : (
        <p className="text-center text-green-600 font-semibold mt-6">
          ✅ Thank you for your message! We’ll get back to you soon.
        </p>
      )}
    </section>
  );
};
 
export default Contact;