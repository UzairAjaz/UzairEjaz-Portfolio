"use client";

import React, { useState } from "react";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setResult("");

    const formData = new FormData();
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();

    if (result.success) {
      setResult("Message sent successfully!");
      reset();
    } else {
      setResult("Failed to send message. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-(--white) px-4 sm:px-10 lg:px-12 py-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 text-center mt-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-(--navyblue)">
            Get In Touch
          </h2>
          <p className="text-md text-(--text-gray)">
            Have a project in mind or want to collaborate? I&apos;d love to
            hear from you!
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-center"
        >
          {[
            {
              title: "Email",
              desc: "uzairejaz987@gmail.com",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-14 h-14 bg-linear-to-br from-[#00C6FF] to-[#0072FF] text-black p-4 rounded-2xl mx-auto"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                  <path d="M22 6l-10 7L2 6"></path>
                </svg>
              ),
            },
            {
              title: "Location",
              desc: "Remote/Worldwide",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="w-14 h-14 bg-linear-to-br from-[#00C6FF] to-[#0072FF] text-black p-3 rounded-2xl mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s6-5.373 6-10a6 6 0 1 0-12 0c0 4.627 6 10 6 10z"
                  />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
              ),
            },
            {
              title: "Response Time",
              desc: "Within 24 hours",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-14 h-14 bg-linear-to-br from-[#00C6FF] to-[#0072FF] text-black p-4 rounded-2xl mx-auto"
                >
                  <path d="M22 2L11 13"></path>
                  <path d="M22 2l-7 20 -4-9 -9-4 20-7z"></path>
                </svg>
              ),
            },
          ].map((info, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4">
              {info.icon}
              <h4 className="text-md text-(--navyblue)">{info.title}</h4>
              <p className="text-sm text-(--text-gray)">{info.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="mt-16 w-full max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl text-center font-semibold mb-6">
            Send Me a Message
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <div>
              <label className="text-sm text-(--navyblue)">Name</label>
              <Input
                {...register("name", { required: "Name is required" })}
                placeholder="Your name"
                className="mt-1"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm text-(--navyblue)">Email</label>
              <Input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="your.email@example.com"
                className="mt-1"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm text-(--navyblue)">Message</label>
              <Textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Tell me about your project or idea"
                className="mt-1"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-linear-to-br from-[#00C6FF] to-[#0072FF] text-(--white)"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>

            {result && <p className="text-center text-sm mt-2">{result}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
