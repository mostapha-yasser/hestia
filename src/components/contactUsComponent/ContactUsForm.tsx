"use client"
import { useRef, useState } from 'react';
import { z } from 'zod';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const contactFormSchema = z.object({
  email: z.string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  message: z.string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(500, { message: "Message cannot exceed 500 characters" })
});


interface FormErrors {
  email?: string;
  message?: string;
}

export default function ContactUsForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const formValues = {
      email: formData.get('email') as string,
      message: formData.get('message') as string
    };

    try {
      // Validate form data with Zod
      contactFormSchema.parse(formValues);

      // Proceed with EmailJS submission if validation passes
      if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 
          !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 
          !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
        throw new Error("EmailJS configuration missing");
      }

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle Zod validation errors
        const fieldErrors: FormErrors = {};
        error.errors.forEach((err) => {
          const path = err.path[0];
          if (path === 'email' || path === 'message') {
            fieldErrors[path] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        // Handle other errors (like EmailJS errors)
        toast.error('Failed to send message. Please try again.');
        console.error('Form submission error:', error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full md:w-3/5 lg:w-2/5 px-6 py-5 space-y-5 text-Text
         shadow-md border rounded-2xl border-main"
    >
      <p className="text-center text-3xl sm:text-5xl font-bold">
        Contact With Us
      </p>

      <div className="flex flex-col">
        <label htmlFor="email" className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          autoComplete="email"
          aria-describedby="email-error"
          className="w-full px-6 py-3 mt-2 rounded-xl border border-Input-Border bg-Input-Background placeholder:text-center"
        />

        <p className="text-center min-h-6 text-red-500">
          {errors.email && errors.email}
        </p>
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="label">
          <span className="label-text">Message</span>
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message to Hestia"
          aria-describedby="message-error"
          className="w-full px-6 py-2 mt-2 min-h-44 max-h-44 rounded-xl border 
             border-Input-Border bg-Input-Background placeholder:pt-16 placeholder:text-center"
        />

        <p className="text-center min-h-6 text-red-500">
          {errors.message && errors.message}
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={` py-4  bg-main text-white
        font-medium w-3/5  hover:shadow-2xl
           rounded-2xl mx-auto
           cursor-pointer
           transition-colors ${
          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}