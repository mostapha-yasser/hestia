import Image from "next/image";
import Link from "next/link";
import balloon from "../../public/assets/Balloon-Lost-big.png"
const NotFound=()=> {
    return (
        <div className="flex flex-col py-12 md:px-10 lg:px-28 lg:flex-row items-center justify-center min-h-screen  bg-main-light  ">
        <div className="text-center lg:text-left lg:w-1/2 lg:pr-12 space-y-16">
          <h1 className=" text-4xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-main  ">
            404
          </h1>
          <p className="mt-4 text-lg sm:text-2xl lg:text-4xl font-bold text-main">
            Oops! You have gone off course
          </p>
          <p className="mt-4 md:text-xl w-11/12 md
          
          mx-auto lg:mx-0 ">
            The page you are looking for has drifted into space. Lets get you back
            to familiar territory.
          </p>
          <div
            className="mt-8 space-y-4 lg:space-y-0 lg:space-x-4
          "
          >
            <Link href={"/"} className="bg-main p-4 text-white rounded-2xl text-lg md:text-2xl" >
            Go Home
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-main rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
            <Image
            width={400}
            height={400}
              src={balloon}
              alt="Lost in Space"
              className="relative z-10 w-full max-w-lg mx-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    );
}

export default NotFound;