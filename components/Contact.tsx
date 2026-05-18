"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faSpinner,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const serviceId = process.env.NEXT_PUBLIC_GMAIL_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_GMAIL_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_GMAIL_PUBLIC_KEY;

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!serviceId || !templateId || !publicKey) {
      alert("Email service is not configured.");
      return;
    }

    setIsSubmitting(true);

    emailjs.sendForm(serviceId, templateId, form, publicKey).then(
      () => {
        setIsSubmitting(false);
        setIsSuccess(true);
        form.reset();
        setTimeout(() => setIsSuccess(false), 5000); // 5 sec baad success message reset
      },
      () => {
        setIsSubmitting(false);
        alert("Failed to send message!");
      },
    );
  };

  return (
    <section
      id="contact"
      className="py-24 h-screen mt-22 bg-slate-50 dark:bg-black relative overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-black blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center lg:px-42">
          {/* Left Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6">
              Let's build <br />
              <span className="text-amber-500 text-glow-sm">
                something great.
              </span>
            </h2>

            <p className="text-slate-600 dark:text-slate-400 mb-10 text-xl max-w-md leading-relaxed">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>
          </motion.div>

          {/* Right Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              onSubmit={handleFormSubmit}
              className="bg-white dark:bg-slate-900/50 p-8 md:p-10 rounded-md border border-slate-200 dark:border-white/5 backdrop-blur-xl shadow-2xl space-y-6"
            >
              <div className="grid md:grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Enter Text Here..."
                    required
                    className="w-full p-4 rounded-md bg-slate-100 dark:bg-slate-800/50 dark:text-white border border-transparent focus:border-amber-500 transition-all outline-none shadow-inner resize-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="w-full p-4 rounded-md bg-slate-100 dark:bg-slate-800/50 dark:text-white border border-transparent focus:border-amber-500 transition-all outline-none shadow-inner"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full h-14 py-5 text-[16px] rounded-normal font-medium uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-lg shadow-amber-500/20 
                  ${isSubmitting ? "bg-amber-600 opacity-70 cursor-not-allowed" : "bg-amber-500 hover:bg-amber-600 active:scale-[0.98] cursor-pointer text-white"}`}
              >
                {isSubmitting ? (
                  <>
                    Sending <FontAwesomeIcon icon={faSpinner} spin />
                  </>
                ) : isSuccess ? (
                  <>
                    Sent Successfully <FontAwesomeIcon icon={faCheckCircle} />
                  </>
                ) : (
                  <>
                    Send Message <FontAwesomeIcon icon={faPaperPlane} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
