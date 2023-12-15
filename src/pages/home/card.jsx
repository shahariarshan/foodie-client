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
            <Link to={`/menu/${_id}`}>
                <figure><img className="lg:px-10 hover:scale-125 duration-200 transition-all " src={image} alt="food" /></figure>
            </Link>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <p className="font-bold text-lg"><span className="text-xs">$</span>{price}</p>

            </div>
        </div>

    );
};

export default Card;