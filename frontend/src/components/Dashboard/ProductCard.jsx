import React from "react";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";

const ProductCard = ({ product }) => {
  const { currency, addToCart, removeFromCart, cartItems, navigate } =
    useAppContext();

  const discount = Math.round(
    ((product.price - product.offerPrice) / product.price) * 100
  );

  return (
    product && (
      <div
        onClick={() => {
          navigate(
            `/dashboard/products/${product.category.toLowerCase()}/${product._id}`
          );
          scrollTo(0, 0);
        }}
        className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      >
        {/* Image Section */}
        <div className="relative bg-gray-50 flex items-center justify-center h-52 overflow-hidden">
          <img
            className="h-full object-contain group-hover:scale-110 transition duration-300"
            src={product.images[0]}
            alt={product.name}
          />

          {/* Discount Badge */}
          {discount > 0 && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-xs text-gray-400 uppercase tracking-wide">
            {product.category}
          </p>

          <h3 className="text-gray-800 font-medium text-base truncate mt-1">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <img
                  key={i}
                  src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                  className="w-3.5"
                  alt="star"
                />
              ))}
            <span className="text-xs text-gray-500 ml-1">(4.0)</span>
          </div>

          {/* Price + Cart */}
          <div className="flex items-center justify-between mt-4">
            <div>
              <p className="text-lg font-semibold text-primary">
                {currency} {product.offerPrice}
              </p>
              <p className="text-sm text-gray-400 line-through">
                {currency} {product.price}
              </p>
            </div>

            <div onClick={(e) => e.stopPropagation()}>
              {!cartItems[product._id] ? (
                <button
                  className="flex items-center gap-1 bg-primary text-white px-3 py-1.5 rounded-lg text-sm hover:bg-primary/90 transition"
                  onClick={() => addToCart(product._id)}
                >
                  <img src={assets.cart_icon} className="w-4" />
                  Add
                </button>
              ) : (
                <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-lg">
                  <button
                    onClick={() => removeFromCart(product._id)}
                    className="px-2 text-lg"
                  >
                    -
                  </button>
                  <span className="text-sm">
                    {cartItems[product._id]}
                  </span>
                  <button
                    onClick={() => addToCart(product._id)}
                    className="px-2 text-lg"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductCard;