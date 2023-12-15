import { FaPlay } from "react-icons/fa";
// import banner from '../../public/images/home/category/banner.png'
import b1 from '../../public/images/home/category/b-food1.png'


const Intro = () => {
    return (
        <div className="max-w-screen-2xl container mx-auto md:px-24  bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] t0-[100%]" >
            <div className="flex flex-col lg:flex-row-reverse item-center gap-8 justify-between ">
            <div className="w-1/2 z-10">
                    <img  src='../../public/images/home/category/banner.png' alt="" />
                    <div className="flex z-0 flex-col md:flex-row justify-around -mt-16 ">
                        {/* 1 */}
                        <div className="flex px-3  py-2 rounded-2xl gap-1 items-center shadow-2xl w-64">
                            <img className="rounded-2xl h-24 p-4" src={b1} alt="" />
                            <div>
                            <p className="font-semibold">Spicy noodles</p>
                            <div className="rating rating-xs">
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-400" checked />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-400" />
                            </div>
                            <p><span className="text-xs">$</span>18.00</p>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="md:flex hidden px-3 p-3 py-2 rounded-3xl gap-1 items-center shadow-2xl w-64">
                            <img className="rounded-2xl h-24 p-4" src={b1} alt="" />
                            <div>
                            <p className="font-semibold">Vegetarian salad</p>
                            <div className="rating rating-xs">
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-400" checked />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-400" />
                            </div>
                            <p><span className="text-xs">$</span>23.00</p>
                            </div>
                        </div>
                      

                    </div>
                </div>
                <div className="w-1/2 space-y-12">
                    <header className="text-5xl leading-snug font-bold ">Dive into Delights Of Delectable <span className="text-green">Food</span></header>
                    <p className="text-[#4A4A4A]">Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                    <div className="flex gap-4">
                        <button className="bg-green flex gap-2 text-white rounded-full px-6 btn">Order Now</button>
                        <button className="bg-white flex gap-2 text-black rounded-full px-6 btn">Watch Now <FaPlay /> </button>
                    </div>
                </div>
               

            </div>
        </div>
    );
};

export default Intro;