import CategoryCard from "./CategoryCard";
import imageJar from "/icons/jar-candle.svg";
import imageMold from "/icons/mold-candle.svg"
const categories = [
    {
      id: 1,
      title: "Jar Candles",
      image:imageJar,
      description: "Candle in a glass jar. Safe, clean, and perfect for gifts or home use."
    },
    {
      id: 2,
      title: "Mold Candles",
      image: imageMold,
      description: "Candle with a shape. Used for home décor and has an artistic look."
    }
  ]; 

export default function Category() {
  return (
    <div className="w-3/5 mx-auto">
        {categories.map((category)=>(<CategoryCard key={category.id} catData={category}/>))}

      
    </div>
  )
}
