/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";



// eslint-disable-next-line react/prop-types
const Card = ({ item }) => {
    const { _id, name, image, recipe, price, category } = item

    const [isHeart, setIsHeart] = useState(false)
    const { user } = useContext(AuthContext)
    // console.log(user);
    const handelHeart = () => {
        setIsHeart(!isHeart);
    }

    const navigate = useNavigate()
    const location = useLocation()

    const handelAddCart = (item) => {
        console.log('Cart add', item);
        if (user && user.email) {
            const cartItem = { itemId: _id, name, quantity: 1, image, price, category, email: user?.email }
            // console.log(cartItem);
            fetch('http://localhost:5000/carts', {
                method: "POST",
                headers: {
                    "content-type": 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            title: "Sweet!",
                            text: `${name} added on the cart`,
                            imageUrl: `${image}`,
                            imageWidth: 200,
                            imageHeight: 200,
                            imageAlt: "Custom image"
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: "Are you sure want to add?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Please log in first!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signUp', { state: { from: location } })
                }
            });
        }
    }
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
                    <button className="btn bg-green flex gap-2 text-white rounded-full px-3 " onClick={() => handelAddCart(item)}>Add cart<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    </button>
                </div>
            </div>

        </div>

    );
};

export default Card;