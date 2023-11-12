"use client";
import { useParams } from "next/navigation";
interface Props{
    totalProducts:number;
}
const CurrentCategory = ({totalProducts}:Props) => {
  const params = useParams(); 
  const paramsArray = params.category
  const currentCategory = paramsArray[paramsArray.length - 1];
  return (
    <div className="mb-[20px]">
      <h1 className="text-primary font-bold font-inter text-[20px]">
        {currentCategory.toUpperCase()}
      </h1>
      <p className="text-gray-400 text-[15px]">{totalProducts} products</p>
    </div>
  );
};

export default CurrentCategory;
