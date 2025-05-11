import ContactUsForm from "@/components/contactUsComponent/ContactUsForm";
import contactUsLogo from "../../../../public/assets/contactUsLogo.svg";
import Image from "next/image";

export default function contactUs() {
  return (
    <div className="w-full py-10   flex justify-center items-center">
      <div className="w-10/12 flex justify-around gap-3 ">
        <ContactUsForm/>
        <div className="hidden lg:block md:w-5/12 ">
          <Image priority src={contactUsLogo} alt="Login image" />
        </div>
      </div>
    </div>
  );
}
