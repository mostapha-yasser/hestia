
"use client";
import { useActionState, useEffect } from "react";
import { login } from "../../service/auth/action";
import { toast } from "react-toastify";

import SubmitButton from "./SubmitButton";

import { useRouter } from "next/navigation";
import { useUserContext } from "@/contexts/UserProvider";
import Link from "next/link";
function LoginForm() {
  const {userLogin}=useUserContext()
  const router = useRouter();
  const [state, loginAction] = useActionState(login, undefined);

  useEffect(() => {
    if (state?.success) {
      userLogin()
      toast.success(state.message);
      router.replace("/");
    }

  }, [state?.message, state?.success, router]);


  return (
    <form
      action={loginAction}
      className="w-full md:w-3/5 lg:w-2/5 px-10 py-3 space-y-6 text-Text
         shadow-m shadow-main border-3 rounded-sm border-main "
    >
      <p className="text-center text-2xl sm:text-3xl xl:text-4xl md:tracking-wider font-bold">
        welcome back
      </p>

      <div className="flex flex-col  ">
        <label htmlFor="email" className="label">
          <span className="label-text ">Email</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          autoComplete="email"
          aria-describedby="email-error"
          className={` w-full px-6 py-3 mt-2 rounded-xs border border-Input-Border bg-Input-Background placeholder:text-center`}
        />

        <p className="text-center min-h-6 text-red-500 ">
          {state?.errors?.email && state?.errors?.email[0]}
        </p>
      </div>

      <div className="flex flex-col  ">
        <label htmlFor="password" className="label">
          <span className="label-text ">Password</span>
        </label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          aria-describedby="password-error"
          className={` w-full px-6 py-3 mt-2 rounded-xs border border-Input-Border bg-Input-Background placeholder:text-center`}
        />

        <p className="text-center min-h-6 text-red-500">
          {state?.errors?.password && state?.errors?.password[0]}
        </p>
      </div>
      <p className="flex w-full  justify-center gap-1  text-sm">
      don&apos;t have account
      <Link href={"/register"} className=" text-blue-600  decoration-1 hover:underline  underline-offset-4">
      Create Account
      </Link>
      </p>
      <SubmitButton title={"login"}   />
      <p className="text-center  min-h-6 text-red-500">{state?.error}</p>
    </form>
  );
}

export default LoginForm;
