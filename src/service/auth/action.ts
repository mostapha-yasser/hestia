"use server"
import { z } from "zod";
import { createSession, deleteSession } from "../../lib/session";
import { redirect } from "next/navigation";
import { verifyUser } from "../apiRequest/loginApiRequest";
import { addUser } from "../apiRequest/registrationApiRequest";
import emailjs from '@emailjs/browser';

const userSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" })
    .trim(),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(5, { message: "Password must be at least 5 characters" })
    .trim(),
});
const userRegisterSchema = z
  .object({
    fullName: z
      .string()
      .min(1, { message: "fullName is required" })
      .max(25, { message: "allow only 25 letter" })
      .trim(),

    governorate: z
      .string()
      .min(1, { message: "governorate is required" })
      .max(25, { message: "allow only 25 letter" })
      .trim(),

    address: z
      .string()
      .min(1, { message: "address is required" })
      .max(40, { message: "allow only 40 letter" })
      .trim(),

    city: z
      .string()
      .min(1, { message: "city is required" })
      .max(25, { message: "allow only 25 letter" })
      .trim(),

      phone: z
      .string()
      .regex(/^01[0-9]{9}$/, {
        message: "Phone must start with 01 and be 11 digits long",
      }),

    whatsApp: z
      .string()
      .regex(/^01[0-9]{9}$/, {
        message: "WhatsApp must start with 01 and be 11 digits long",
      }),

    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" })
      .trim(),

    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(10, { message: "Password must be at least 10 characters" })
      .trim(),

    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" })
      .min(10, { message: "Password must be at least 10 characters" })
      .trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], 

  });
  const sendEmailSchema = z.object({
    email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" })
    .trim(),
    message: z
    .string()
    .min(10, { message: "Email is required" })
    .max(200,{ message: "Password must be at least 200 characters" })
    .trim(),
  
  
  })



export async function login(prevState: unknown, formData: FormData) {
  const validation = userSchema.safeParse(Object.fromEntries(formData));
  if (!validation.success) {
    return { errors: validation.error.flatten().fieldErrors };
  }

  const { email, password } = validation.data;

  try {
    const response = await verifyUser({ email, password });
    
    if (!response?.data?.token) {
      return { error: response?.data?.error || "Invalid Email Or Password " };
    }
    
    await createSession(response.data.token);
    return { success: true,message:"successful login" };
    
} catch  {
    return { error: "Login failed. Please try again." };
  }
}


export async function register(prevState: unknown, formData: FormData) {
  const validation = userRegisterSchema.safeParse(Object.fromEntries(formData));
  if (!validation.success) {
    return { errors: validation.error.flatten().fieldErrors };
  }

  const { email, password,address,city,fullName,governorate,phone,whatsApp} = validation.data;
const userData={
  email, password,address,city,fullName,governorate,phone,whatsApp


}
  try {
    const response = await addUser(userData);
    
    if (!response?.data?.token) {
      return { error: response?.data?.message || "Invalid credentials" };
    }
    
    await createSession(response.data.token);
    return { success: response?.data?.verified,message:response?.data?.message };
    
  } catch  {
    return { error: "Login failed. Please try again." };
  }
}
export async function sendEmail(prevState: unknown, formData: FormData) {
  const validation = sendEmailSchema.safeParse(Object.fromEntries(formData));
  if (!validation.success) {
    return { errors: validation.error.flatten().fieldErrors };
  }

  const { email, message } = validation.data;

  const templateParams = {
    user_email: email,
    user_name: "Hestia User",
    message: message,
  };

  try {
     await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
    );
    
    return { success: true,message:"Successful Send Your Message "};
    
  } catch  {
    return { error: "Login failed. Please try again." };
  }
}




export async function logout() {
  await deleteSession();
  redirect("/login");
}