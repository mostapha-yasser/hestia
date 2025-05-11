import LoginForm from "@/components/loginComponents/LoginForm";
import loginLogo from "../../../../public/assets/loginLogo.svg";
import Image from "next/image";
export default function Login() {
  return (
      <div className="w-full py-12 flex justify-center items-center">
        <div className="w-10/12 flex justify-around gap-3 ">
          <LoginForm />
          <div className="hidden lg:block md:w-5/12 ">
            <Image priority src={loginLogo} alt="Login image" />
          </div>
        </div>
    </div>
  );
}
