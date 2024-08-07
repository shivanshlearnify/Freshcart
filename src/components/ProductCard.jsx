import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../utils/cartSlice";
import toast from "react-hot-toast";

const ProductCard = ({ image, title, rating, price, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="max-w-[240px] border-2 rounded-md cursor-pointer sm:max-w-[175px]">
      <Link to={"/Product/" + id}>
        <img src={image} alt={title} className="w-[230px] h-[230px]" />
        <div className="p-2 flex flex-col gap-2">
          <h2 className="font-semibold">
            {title.length > 25 ? title?.slice(0, 16) + "..." : title}
          </h2>
          <p>Rating ({rating} Out Of 5)</p>
          <p>Price - {price}</p>
        </div>
      </Link>
      <button
        className="bg-[#0aad0a] text-[white] flex items-center px-[28px] py-[8px] rounded cursor-pointer justify-center w-80% mx-auto mb-2"
        onClick={() => {
          dispatch(addToCart({ title, price, quantity: 1 }));
          toast.success("Added To Cart SucessFully");
        }}
      >
        ➕ Add To Cart
      </button>
    </div>
  );
};
export default ProductCard;
