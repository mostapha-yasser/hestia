"use client";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";

import { useRouter } from "next/navigation";
import { useUserContext } from "@/contexts/UserProvider";
import Link from "next/link";
import SubmitButton from "../loginComponents/SubmitButton";
import { register } from "@/service/auth/action";

function RegisterForm() {
  const { userLogin } = useUserContext();

  const router = useRouter();

  const [state, registerAction] = useActionState(register, undefined);

  useEffect(() => {
    if (state?.success) {
      userLogin();
      toast.success(state.message);
      router.replace("/");
    }
  }, [state?.message, state?.success, router]);
  return (
    <form
      action={registerAction}
      className="w-full  lg:w-7/12 px-10 sm:py-2 sm:space-y-0.5 text-Text
         shadow-m shadow-main border-3 rounded-2xl border-main "
    >
      <p className="text-center text-3xl sm:text-3xl  font-bold my-3 ">
        Join Us
      </p>
      <div className="flex items-center justify-center sm:justify-between flex-col sm:flex-row">
        <div className="flex flex-col w-full sm:w-5/11 ">
          <label htmlFor="email" className="px-2">
            <span className="  text-sm sm:text-base ">Full Name</span>
          </label>
          <input
            id="fullName"
            type="fullName"
            name="fullName"
            placeholder="Enter your full Name"
            autoComplete="full Name"
            aria-describedby="fullName-error"
            className={` w-full px-6 sm:py-2 sm:mt-1 
              rounded-xl border border-Input-Border
              text-sm py-1 sm:text-base bg-Input-Background placeholder:text-center`}
          />

          <p className="text-center min-h-4 text-red-500  text-xs">
            {state?.errors?.fullName && state?.errors?.fullName[0]}
          </p>
        </div>
        <div className="flex flex-col w-full sm:w-5/11 ">
          <label htmlFor="email" className="px-2">
            <span className="  text-sm sm:text-base ">Email</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="email"
            aria-describedby="email-error"
            className={` w-full px-6 sm:py-2 sm:mt-1 
              rounded-xl border border-Input-Border
              text-sm py-1 sm:text-base bg-Input-Background placeholder:text-center`}
          />

          <p className="text-center min-h-4 text-red-500  text-xs">
            {state?.errors?.email && state?.errors?.email[0]}
          </p>
        </div>
      </div>
      {/* ////////////////// */}
      <div className="flex items-center justify-center sm:justify-between flex-col sm:flex-row">
      <div className="flex flex-col w-full sm:w-5/11 ">
      <label htmlFor="email" className="px-2">
            <span className="  text-sm sm:text-base ">Whats App</span>
          </label>
          <input
            id="whatsApp"
            type="tel"
            name="whatsApp"
            placeholder="Enter your Whats App"
            autoComplete="Whats App"
            aria-describedby="whatsApp-error"
            className={` font-mono w-full sm:px-6 sm:py-2 sm:mt-1  text-sm sm:text-base  rounded-xl border border-Input-Border bg-Input-Background placeholder:text-center placeholder:font-sans `}
          />

          <p className="text-center min-h-4 text-red-500  text-xs">
            {state?.errors?.whatsApp && state?.errors?.whatsApp[0]}
          </p>
        </div>
        <div className="flex flex-col w-full sm:w-5/11 ">
          <label htmlFor="email" className="px-2">
            <span className="  text-sm sm:text-base ">phone</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Enter your phone"
            autoComplete="phone"
            aria-describedby="phone-error"
            className={` font-mono w-full sm:px-6 sm:py-2 sm:mt-1 text-sm sm:text-base rounded-xl border border-Input-Border bg-Input-Background placeholder:text-center placeholder:font-sans`}
          />

          <p className="text-center min-h-4 text-red-500  text-xs">
            {state?.errors?.phone && state?.errors?.phone[0]}
          </p>
        </div>
      </div>
      {/* ////////////////// */}
      <div className="flex items-center justify-center sm:justify-between flex-col sm:flex-row">
      <div className="flex flex-col w-full sm:w-3/13 ">
      <label htmlFor="email" className="px-2">
            <span className="  text-sm sm:text-base ">Governorate</span>
          </label>
          <input
            id="governorate"
            type="governorate"
            name="governorate"
            placeholder="Enter your governorate"
            autoComplete="governorate"
            aria-describedby="governorate-error"
            className={` w-full px-6 sm:py-2 sm:mt-1 
              rounded-xl border border-Input-Border
              text-sm py-1 sm:text-base bg-Input-Background placeholder:text-center`}
          />

          <p className="text-center min-h-4 text-red-500  text-xs">
            {state?.errors?.governorate && state?.errors?.governorate[0]}
          </p>
        </div>
        <div className="flex flex-col w-full sm:w-4/13 ">
          <label htmlFor="email" className="px-2">
            <span className="  text-sm sm:text-base ">city</span>
          </label>
          <input
            id="city"
            type="city"
            name="city"
            placeholder="Enter your city"
            autoComplete="city"
            aria-describedby="city-error"
            className={` w-full px-6 sm:py-2 sm:mt-1 
              rounded-xl border border-Input-Border
              text-sm py-1 sm:text-base bg-Input-Background placeholder:text-center`}
          />

          <p className="text-center min-h-4 text-red-500  text-xs">
            {state?.errors?.city && state?.errors?.city[0]}
          </p>
        </div>
        <div className="flex flex-col w-full sm:w-5/13 ">
          <label htmlFor="email" className="px-2">
            <span className="  text-sm sm:text-base ">Address</span>
          </label>
          <input
            id="address"
            type="address"
            name="address"
            placeholder="Enter your address"
            autoComplete="address"
            aria-describedby="address-error"
            className={` w-full px-6 sm:py-2 sm:mt-1 
              rounded-xl border border-Input-Border
              text-sm py-1 sm:text-base bg-Input-Background placeholder:text-center`}
          />

          <p className="text-center min-h-4 text-red-500  text-xs">
            {state?.errors?.address && state?.errors?.address[0]}
          </p>
        </div>
      </div>
      {/* ////////////////// */}
      <div className="flex items-center justify-center sm:justify-between flex-col sm:flex-row">
      <div className="flex flex-col w-full sm:w-6/13 ">
      <label htmlFor="password" className="px-4">
            <span >Password</span>
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            aria-describedby="password-error"
            className={` w-full px-6 sm:py-2 sm:mt-1 
              rounded-xl border border-Input-Border
              text-sm py-1 sm:text-base bg-Input-Background placeholder:text-center`}
          />

          <p className="text-center min-h-4 text-xs text-red-500">
            {state?.errors?.password && state?.errors?.password[0]}
          </p>
        </div>
        <div className="flex flex-col w-full sm:w-6/13 ">
        <label htmlFor="password" className="px-4">
            <span >Confirm Password</span>
          </label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="Enter your password"
            autoComplete="current-password"
            aria-describedby="password-error"
            className={` w-full px-6 sm:py-2 sm:mt-1 
              rounded-xl border border-Input-Border
              text-sm py-1 sm:text-base bg-Input-Background placeholder:text-center`}
          />

          <p className="text-center min-h-4 text-xs text-red-500">
            {state?.errors?.confirmPassword && state?.errors?.confirmPassword[0]}
          </p>
        </div>
      </div>

      <p className="flex w-full  justify-center gap-1 text-sm ">
        Already Have Account
        <Link
          href={"/login"}
          className=" text-blue-600  decoration-1 hover:underline  underline-offset-4"
        >
          Login Now
        </Link>
      </p>
      <SubmitButton title={"Registration"} />
      <p className="text-center  min-h-6 text-red-500">{state?.error}</p>
    </form>
  );
}

export default RegisterForm;
