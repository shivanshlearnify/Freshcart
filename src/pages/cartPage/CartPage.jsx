import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, emptyCart } from "../../utils/cartSlice";
import toast from "react-hot-toast";

const CartPage = () => {
  const cartArray = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const cartTotal = cartArray.reduce(
    (total, item) => total + Number(item.quantity) * item.price,
    0
  );

  const handleCart = () => {
    if (cartArray.length > 0) {
      dispatch(emptyCart());
      toast.success("Order placed Sucessfully");
    }
  };

  

  return (
    <div className="max-w-7xl mx-auto min-h-[60vh] sm:mt-32 md:px-4 sm:px-4">
      <h1 className="font-semibold text-3xl text-gray-600">Cart</h1>
      <div className="grid grid-cols-5 max-w-4xl mt-4 sm:grid-cols-3 sm:gap-6 ">
        <span className="font-medium text-xl text-green-500">Item Name</span>
        <span className="font-medium text-xl text-green-500">Price</span>
        <span className="font-medium text-xl text-green-500">Quantity</span>
        <span className="font-medium text-xl text-green-500">Total</span>
        <span className="font-medium text-xl text-green-500">
          Remove from cart
        </span>
      </div>
      {cartArray.map((item, index) => {
        const { title, price, quantity } = item;
        return (
          <div key={index} className="max-w-4xl my-8">
            <div className="grid grid-cols-5 my-2 sm:grid-cols-3 sm:gap-6 ">
              <span className="text-gray-600 text-lg font-medium">{title}</span>
              <span className="font-medium text-gray-500">{price}</span>
              <span className="font-medium text-gray-500">{quantity}</span>
              <span className="font-medium text-gray-500">
                {price * quantity}
              </span>
              <span
                onClick={() => {
                  dispatch(deleteFromCart(index));
                  toast.success("deleted from the Cart SucessFully");
                }}
                className="cursor-pointer flex justify-center"
              >
                ❌
              </span>
            </div>
            <hr />
          </div>
        );
      })}
      <div className="border max-w-56 px-4 flex flex-col gap-2 py-2 rounded my-12">
        <h2 className="font-semibold text-3xl text-gray-600">Cart Total</h2>
        <div className="flex justify-between">
          <span className="text-xl text-green-500">Total</span>
          <span className="text-xl text-gray-500">{Math.floor(cartTotal)}</span>
        </div>
        <button
          className="bg-green-500 text-white w-full px-1 py-2 rounded-md cursor-pointer"
          onClick={handleCart}
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;

