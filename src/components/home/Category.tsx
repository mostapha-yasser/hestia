import CategoryCard from "./CategoryCard";

const categories = [
    {
      id: 1,
      title: "Jar Candles",
      image: "/icons/jar-candle.svg",
      description: "Candle in a glass jar. Safe, clean, and perfect for gifts or home use."
    },
    {
      id: 2,
      title: "Mold Candles",
      image: "/icons/mold-candle.svg",
      description: "Candle with a shape. Used for home décor and has an artistic look."
    }
  ]; 

export default function Category() {
  return (
    <div className="w-3/5 mx-auto">
        {categories.map((category)=>(<CategoryCard key={category.id}/>))}

      
    </div>
  )
}
