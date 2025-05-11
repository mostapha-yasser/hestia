import CategoryCard from "./CategoryCard";

const categories = [
  {
    id: 1,
    title: "Jar Candles",
    image: { scr: "/assets/jar.jpg" },
    description:
      "Candle in a glass jar. Safe, clean, and perfect for gifts or home use.",
  },
  {
    id: 2,
    title: "Mold Candles",
    image: { scr: "/assets/mold.jpg" },
    description:
      "Candle with a shape,Used for home décor and has an artistic look.",
  },
];

export default function CategoriesSection() {
  return (
    <div className="w-full py-12 ">
      <h2 className="text-Text text-3xl font-bold text-center  mb-4">
         Our Categories</h2>
             <p className="text-lg text-Text/80 text-center  max-w-2xl mx-auto ">
            Discover our carefully crafted candle collections, each designed to bring warmth and ambiance to your special moments.
          </p>


  
      <div className="w-4/5 mx-auto flex flex-col lg:flex-row
       items-center justify-evenly   p-10 ">
        {categories.map((category) => (
          <CategoryCard catData={category} key={category.id} />
        ))}
      </div>
    </div>
  );
}
