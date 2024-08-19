import logo from "../../assets/freshcart-logo.svg";
import { MdOutlineSearch } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";
import { TbCategory } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import DataContext from "../../utils/DataContext";
import DataFetcher from "../../hooks/DataFetcher";
import CartPage from "../../pages/cartPage/CartPage";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { categoryData } = useContext(DataContext);
  const [isHovered, setIsHovered] = useState(false);
  const [searchHover, setSearchHover] = useState(false);
  const [searchQuery, setSearchQuery] = useState();
  const productSearch = useRef();
  const cartArray = useSelector((state) => state.cart.items);

  const myDebounce = (cb, dtime) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, dtime);
    };
  };

  const handleInputChange = () => {
    setSearchQuery(productSearch.current.value);
  };
  const { data: searchProductData, loading: searchProductLoading } =
    DataFetcher(`https://dummyjson.com/products/search?q=${searchQuery}`);

  useEffect(() => {
    if (searchQuery) {
      setSearchHover(true);
    } else {
      setSearchHover(false);
    }
  }, [searchQuery, searchProductData]);

  return (
    <>
      <div className="max-w-7xl mx-auto h-[100px] md:px-2">
        <div className="flex items-center h-[75px] justify-between sm:flex-wrap sm:justify-center sm:my-5 sm:gap-2 md:pr-6">
          <Link to={"/"}>
            <img src={logo} alt="Logo" />
          </Link>
          <div className="sm:w-10/12 sm:order-3 md:w-6/12">
            <div className="flex  justify-between mx-auto border-2 border-gray-500 rounded items-center ">
              <input
                ref={productSearch}
                onChange={myDebounce(handleInputChange, 500)}
                className="border-r-2 border-gray-400 w-[950px] h-[30px] px-3 py-4 outline-none focus:outline-none sm:w-11/12"
                type="text"
                placeholder="Search"
              />
              <MdOutlineSearch className="w-[35px] text-[20px] text-gray-500 cursor-pointer hover:text-green-500 transition delay-150 duration-300 ease-in-out sm:w-1/12" />
            </div>
            {searchHover && (
              <div className="bg-white absolute w-[950px] border z-20 sm:w-10/12">
                <ul className="flex flex-col">
                  {searchProductData?.products
                    ?.slice(0, 8)
                    .map((productname, index) => (
                      <Link
                        className="text-transform: capitalize text-[#5c6c75] hover:bg-slate-200 rounded-lg py-1 px-2 font-medium"
                        key={index}
                        to={"/Product/" + productname?.id}
                        onClick={() => setSearchHover(false)}
                      >
                        {productname?.title}
                      </Link>
                    ))}
                </ul>
              </div>
            )}
          </div>
          <div className="flex w-[70px] justify-between text-[30px] text-gray-500 cursor-pointer sm:order-2">
            <div>
              <IoMdHeartEmpty />
            </div>
            <div className="relative">
              <Link to={"/CartPage"}>
                <span className="absolute left-[18px] top-[-7px] bg-green-500 text-[15px] text-white rounded-full w-5 h-5 flex justify-center items-center">
                  {cartArray.length}
                </span>
                <CiShoppingCart />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative flex gap-4 items-center sm:flex-wrap sm:justify-center sm:my-5">
          <div
            className="bg-[#0aad0a] text-[white] flex items-center px-[28px] py-[8px] rounded cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <TbCategory className="mr-2" />{" "}
            <span className="text-[18px] font-medium">All Category</span>
          </div>
          {isHovered && (
            <div
              className="absolute top-10 bg-white w-5/12 border rounded-lg p-4 shadow-md sm:top-10 sm:w-10/12 z-50"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <ul className="grid grid-cols-2 ">
                {categoryData?.map((categoryname, index) => (
                  <Link
                    className="text-transform: capitalize text-[#5c6c75] hover:bg-slate-200 rounded-lg py-1 px-2 font-medium"
                    key={index}
                    to={"/Product-Category/" + categoryname}
                    onClick={() => setIsHovered(false)}
                  >
                    {categoryname}
                  </Link>
                ))}
              </ul>
            </div>
          )}
          <ul className="flex gap-4 sm:flex-wrap sm:justify-center sm:mx-2 sm:gap-2">
            <Link
              to={"/"}
              className="flex items-center gap-2 font-medium text-gray-700 "
            >
              Home
            </Link>

            <Link
              className="flex items-center gap-2 font-medium text-gray-700 "
              to={"/AllProducts"}
            >
              All Products
            </Link>
            <Link className="flex items-center gap-2 font-medium text-gray-700 " to={"/About"}>
              About us <FaChevronDown />
            </Link>
            <Link className="flex items-center gap-2 font-medium text-gray-700 " to={"./ContactUs"}>
              Contact us <FaChevronDown />
            </Link>
          </ul>
        </div>
      </div>
      <hr className="mt-10  mb-[30px] sm:hidden " />
    </>
  );
};

export default Navbar;
