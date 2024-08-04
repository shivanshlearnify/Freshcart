import { Link, useParams } from "react-router-dom";
import DataFetcher from "../../hooks/DataFetcher";
import { GoStarFill } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import ProductCard from "../../components/ProductCard";
import ProductPageShimmer from "../../components/shimmer/ProductPageShimmer";

const ProductPage = () => {
  const { id } = useParams();
  const { data: productData, loading: productLoading } = DataFetcher(
    `https://dummyjson.com/products/${id}`
  );
  const { data: CategoryProductData, loading: CategoryProductLoading } =
    DataFetcher(
      `https://dummyjson.com/products/category/${productData?.category}`
    );
  if (!productData) {
    return <ProductPageShimmer/> ;
  }
  const { category, title, images, description, reviews, price, stock, brand } =
    productData;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="font-medium">
        <span className="text-green-500">Home </span>{" "}
        <span className="text-gray-500">/ </span>
        <Link
          className="text-green-500 text-transform : capitalize"
          to={"/Product-Category/" + category}
        >
          {category}
        </Link>
        <span className="text-gray-500"> / </span>
        <span className="text-gray-500 text-transform : capitalize">
          {title}
        </span>
      </div>
      <div className="flex gap-16">
        <img className="w-1/2 h-[555px]" src={images[0]} alt={title} />
        <div className="flex flex-col gap-6 justify-center">
          <div>
            <h2 className="text-4xl font-medium text-gray-500 mb-2 flex gap-4 items-center">
              {title} <IoMdHeartEmpty className="cursor-pointer text-2xl" />
            </h2>
            <p className="font-medium text-gray-400">{description}</p>
            <div className="flex gap-2 items-center">
              <div className="flex">
                <GoStarFill className="text-yellow-500" />
                <GoStarFill className="text-yellow-500" />
                <GoStarFill className="text-yellow-500" />
                <GoStarFill className="text-yellow-500" />
                <GoStarFill className="text-yellow-500" />
              </div>
              <span className="font-medium text-gray-500">({reviews.length} Customer review)</span>
            </div>
            <p className="font-medium text-gray-500">${price}</p>
          </div>

          <hr className="my-1" />
          <div className="flex gap-4">
            <input
              type="number"
              className="border-2 w-14 pl-1"
              defaultValue={1}
              min={1}
              max={stock}
            />
            <button className="bg-[#0aad0a] text-[white] px-[28px] py-[8px] rounded cursor-pointer w-80%">
              Add to cart
            </button>
          </div>
          <hr className="my-1" />
          <div>
            <p className="text-transform : capitalize font-medium text-gray-500">
              Category:{" "}
              <Link
                to={"/Product-Category/" + category}
                className="text-green-500"
              >
                {category}
              </Link>
            </p>
            <p className="font-medium text-gray-500">Brand: {brand}</p>
            <p className="font-medium text-gray-500">Available Stock: {stock}</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-green-500 cursor-pointer">
          Reviews ({reviews.length})
        </p>
        <hr className="my-2 bg-black" />
        <div>
          {reviews.map((review, index) => {
            const dateObject = new Date(review.date);

            const options = { year: "numeric", month: "long", day: "numeric" };
            const formattedDate = dateObject.toLocaleDateString(
              "en-US",
              options
            );
            return (
              <div key={index}>
                <div className="flex gap-4 items-center">
                  <div>
                    <FaUser className="text-5xl border-2 rounded-full p-1 border-green-500 text-gray-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">
                      {review.reviewerName}
                    </p>
                    <p className="text-xs font-medium text-gray-400">
                      {formattedDate}
                    </p>
                    <p className="text-gray-500 font-medium">
                      {review.comment}
                    </p>
                  </div>
                </div>
                <hr className="my-2" />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-medium text-gray-500 mt-8">
          Related Products
        </h1>
        <div className="flex justify-between my-6">
          {CategoryProductData?.products?.filter((data)=>data.id != id).slice(0, 5).map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.images[0]}
                title={product.title}
                rating={product.rating}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
