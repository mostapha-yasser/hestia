// import { useEffect } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton({title}:{title:string }
) 
{
  const { pending } = useFormStatus();


  return (
    <div className="flex flex-col  mt-3">
      <button
        disabled={pending}
        type="submit"

        className={`text-xl cursor-pointer bg-main font-bold
           px-6 py-2 md:text-2xl tracking-wider 
          mx-auto w-3/4  shadow-sm rounded-sm text-white 
          ${ pending?"opacity-70":""}
          `}
      >
        {pending ? "loading.." : title}
      </button>
    </div>
  );
}

export default SubmitButton;
