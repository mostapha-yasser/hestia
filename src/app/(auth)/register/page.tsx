import RegisterForm from "@/components/registerComponents/RegisterForm";
import Image from "next/image";
import registerLogo from "../../../../public/assets/registerLogo.svg"

function Register() {
    return (
        <div className="w-11/12 mx-auto  py-10  ">
        <div className="w-full flex justify-between ">
          <RegisterForm />
          <div className="hidden lg:block lg:w-5/12 ">
            <Image priority src={registerLogo} alt="Login image" />
          </div>
        </div>
    </div>
    );
}

export default Register;