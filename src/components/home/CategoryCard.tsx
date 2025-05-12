import Image from "next/image"
type staticImageData={
    scr:string
}


export default function CategoryCard({catData}:{catData:{id:number,image:staticImageData,title:string,description:string}}) {
 const {image,title,description}=catData
    return (
    <div className="w-full sm:w-4/5 md:w-3/7 lg:w-2/5  pb-5 m-5  bg-Aside">

        <Image width={360} height={250} src={image.scr} alt="" priority className="overflow-hidden w-full h-72 "/>

        <p className="text-Text text-center text-2xl py-4 font-medium ">{title}</p>
        <p className="text-Text  w-6/7 mx-auto text-center">{description}</p>

      
    </div>
  )
}