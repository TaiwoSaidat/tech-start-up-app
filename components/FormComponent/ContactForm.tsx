import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        companyName: '',
        projectType: 'software-development',
        message: '',
    })

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    console.log("submit clicked");
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-900 text-white py-12 max-w-4xl space-y-6 small-16 "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full py-2 px-3 border border-neutral-700  bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded "
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-2 px-3 border border-neutral-700  bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded"
              required
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm mb-2">Company Name</label>
            <input
              type="text"
              name="companyName"
              placeholder="Enter your company name"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full py-2 px-3 border border-neutral-700  bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded"
              required
            />
          </div>

          {/* Project Type */}
          <div>
            <label className="block text-sm mb-2">Project Type</label>
            <div className="flex items-center gap-4 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="projectType"
                  value="software-development"
                  checked={formData.projectType === "software-development"}
                  onChange={handleChange}
                  className="text-neutral-500 focus:ring-neutral-500"
                />
                Software Development
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="projectType"
                  value="uiux-design"
                  checked={formData.projectType === "uiux-design"}
                  onChange={handleChange}
                  className="text-neutral-500 focus:ring-neutral-500"
                />
                UI/UX Design
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="projectType"
                  value="both"
                  checked={formData.projectType === "both"}
                  onChange={handleChange}
                  className="text-neutral-500 focus:ring-neutral-500"
                />
                Both
              </label>
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm mb-2">Message</label>
          <textarea
            name="message"
            placeholder="Briefly describe your project or any specific needs"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 h-32 border border-neutral-700  bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded"
            required
          ></textarea>
        </div>

        {/* Form Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-12">
          <button
            type="submit"
            className="px-6 py-3 bg-white text-neutral-900 rounded-full hover:bg-neutral-200 focus:outline-none"
          >
            Send Message
          </button>
          <button
            type="button"
            className="px-6 py-3 border border-white rounded-full text-white hover:bg-neutral-700 focus:outline-none"
          >
            Book a Consultation
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
