"use client";

import { React, useState } from "react";
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
    <>
      <section
        id="contact"
        className="w-full min-h-screen bg-(--white) px-6 py-12"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 text-center mt-12"
          >
            <h2 className="text-5xl font-bold text-(--navyblue)">
              Get In Touch
            </h2>
            <p className="text-md text-(--text-gray)">
              Have a project in mind or want to collaborate? I&apos;d love to
              hear from you!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="flex justify-center gap-24 mt-24"
          >
            <div className="flex flex-col justify-center items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-14 h-14 bg-linear-to-br from-[#00C6FF] to-[#0072FF] text-black p-4 rounded-2xl"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                  <path d="M22 6l-10 7L2 6"></path>
                </svg>
              </div>
              <h4 className="text-md text-(--navyblue) mt-4">Email</h4>
              <p className="text-sm text-(--text-gray) mt-2">
                uzairejaz987@gmail.com
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="w-14 h-14 bg-linear-to-br from-[#00C6FF] to-[#0072FF] text-black p-3 rounded-2xl"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s6-5.373 6-10a6 6 0 1 0-12 0c0 4.627 6 10 6 10z"
                  />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
              </div>
              <h4 className="text-md text-(--navyblue)  mt-4">Location</h4>
              <p className="text-sm text-(--text-gray) mt-2">
                Remote/Worldwide
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-14 h-14 bg-linear-to-br from-[#00C6FF] to-[#0072FF] text-black p-4 rounded-2xl"
                >
                  <path d="M22 2L11 13"></path>
                  <path d="M22 2l-7 20  -4-9-9-4 20-7z" />
                </svg>
              </div>
              <h4 className="text-md text-(--navyblue)  mt-4">Response Time</h4>
              <p className="text-sm text-(--text-gray) mt-2">Within 24 hours</p>
            </div>
          </motion.div>
          <motion.div
            className="mt-24 px-96"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-6">
              <h4 className="text-2xl">Send Me a Message</h4>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <label htmlFor="Name" className="text-sm text-(--navyblue)">
                  Name
                </label>
                <Input
                  {...register("name", { required: "Name is required" })}
                  type="Name"
                  placeholder="Your name"
                  className="mt-1"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label htmlFor="Name" className="text-sm text-(--navyblue)">
                  Email
                </label>
                <Input
                  {...register("email", { required: "email is required" })}
                  type="Email"
                  placeholder="your.email@example.com"
                  className="mt-1"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label htmlFor="Name" className="text-sm text-(--navyblue)">
                  Message
                </label>
                <Textarea
                  {...register("message", { required: "message is required" })}
                  placeholder="Tell me about your project or idea"
                  className="mt-1"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <div className="mt-6">
                <Button
                  variant="outline"
                  className="w-full bg-linear-to-br from-[#00C6FF] to-[#0072FF] text-(--white) mb-24"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M22 2L11 13"></path>
                    <path d="M22 2l-7 20  -4-9-9-4 20-7z" />
                  </svg>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
                {result && <p className={"text-center text-sm"}>{result}</p>}
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
