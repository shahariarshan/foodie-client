/* eslint-disable react/prop-types */

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";



// eslint-disable-next-line react/prop-types
const Card = ({ item }) => {
    const [isHeart, setIsHeart] = useState(false)
    const handelHeart = () => {
        setIsHeart(!isHeart);
    }
    const { _id, name, image, recipe, price } = item;
    return (

        <div className="card card-compact  ml-5 rounded-2xl shadow-2xl relative ">
            <div className={`heartStar bg-green  absolute rating gap-1 top-2 right-2 ${isHeart ? "text-rose-500" : "text-white"}`}
                onClick={handelHeart} >

                <FaHeart className="h-10 w-10 p-2 cursor-pointer "></FaHeart>
            </div>
            <Link >
                <figure><img className="lg:px-10 hover:scale-125 duration-200 transition-all " src={image} alt="food" /></figure>
            </Link>
            <div className="card-body">

                <Link to={`/menu/${_id}`}>
                    <h2 className="card-title">{name}</h2>
                </Link>
                <p>{recipe}</p>
                <div className="flex justify-around ">
                    <p className="font-bold text-lg"><span className="text-xs">$</span>{price}</p>
                    <button className="btn bg-green flex gap-2 text-white rounded-full px-3 ">Add cart<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    </button>
                </div>
            </div>

        </div>

    );
};

export default Card;