import { Link } from "react-router-dom";

const ProductCard = ({ image, title, rating, price,id }) => {
  return (
    <div className="max-w-[240px] border-2 rounded-md cursor-pointer">
      <Link to={"/Product/"+id}>
      <img src={image} alt={title} className="w-[230px] h-[230px]" />
      <div className="p-2 flex flex-col gap-2">
        <h2 className="font-semibold">
          {title.length > 25 ? title?.slice(0, 25) + "..." : title}
        </h2>
        <p>Rating ({rating} Out Of 5)</p>
        <p>Price - {price}</p>
      </div>
      </Link>
      <button className="bg-[#0aad0a] text-[white] flex items-center px-[28px] py-[8px] rounded cursor-pointer justify-center w-80% mx-auto mb-2">
        ➕ Add To Cart
      </button>
    </div>
  );
};
export default ProductCard;
