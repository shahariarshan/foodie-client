

const CustomersReview = () => {
    return (
        <div className="flex flex-col lg:flex-row-reverse gap-10 items-center justify-center mt-24">
            <div className="w-[50%">
                <img src="/images/home/testimonials/testimonials.png" className="w-[506px] h-[744px]" alt="" />

            </div>
            <div className="w-[50% space-y-5">
                <h2 className="text-[#FF6868]  uppercase">Testimonials</h2>
                <h2 className="text-4xl  font-extrabold">What Our Customers <br /> Say About Us</h2>
                <p className="font-[26px] text-[#555]">“I had the pleasure of dining at Foodi last night, and <br /> I'm still raving about the experience! The attention to <br /> detail in presentation and service was impeccable”</p>
                <div className="flex">
                    <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                        <div className="avatar">
                            <div className="w-12">
                                <img src="/images/home/testimonials/testimonial1.png" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img src="/images/home/testimonials/testimonial2.png" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img src="/images/home/testimonials/testimonial3.png" />
                            </div>
                        </div>


                    </div>
                    <div>
                        <h2 className=" font-semibold text-black">Customer Feedback</h2>
                        <p><span><div className="rating rating-xs">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-400 mr-2" />
                            
                        </div></span><span className="font-semibold">4.9</span>(18.6k Reviews)</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CustomersReview;