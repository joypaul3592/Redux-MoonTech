import React from "react";
import { BiListPlus, BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/actionCreators/productAction";

const ProductCard = ({ product }) => {

  const dispatch = useDispatch();
  let location = useLocation();
  const pathname = location.pathname

  return (
    <div
      className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900 relative'
      key={product._id}
    >


      {
        pathname.includes("cart") && <div className=" absolute h-8 w-8 flex items-center justify-center right-2 top-2 bg-indigo-500 text-white font-semibold p-1 rounded-full ">{product.quantity}</div>

      }


      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature) => {
            return <li className='text-sm '>{feature}</li>;
          })}
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>
        {
          pathname.includes("cart") && <button onClick={() => dispatch(removeFromCart(product))} className='bg-pink-700 rounded-full flex items-center justify-between py-1 px-3 flex-1 text-white text-bold'>
            Remove <BiTrash />
          </button>
        }
        {
          !pathname.includes("cart") && <button onClick={() => dispatch(addToCart(product))} className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
            Add to cart
          </button>
        }

        {
          !pathname.includes("cart") && <button
            title='Add to wishlist'
            className='bg-indigo-500  py-1 px-2 rounded-full'
          >
            <BiListPlus className='text-white' />
          </button>
        }
      </div>
    </div>
  );
};

export default ProductCard;
