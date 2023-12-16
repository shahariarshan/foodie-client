/* eslint-disable react/no-unescaped-entities */

import ServicesCards from "./ServicesCards";

const serviceList = [
    { id: 1, title: 'Catering', des: 'Delight your guests with our flavors and  presentation', logo: '/images/home/services/icon1.png' },
    { id: 2, title: 'Fast delivery', des: 'We deliver your order promptly to your door', logo: '/images/home/services/icon2.png' },
    { id: 3, title: 'Online Ordering', des: 'Explore menu & order with ease using our Online Ordering ', logo: '/images/home/services/icon3.png' },
    { id: 4, title: 'Gift cards', des: 'Give the gift of exceptional dining with Foodi Gift Cards', logo: '/images/home/services/icon4.png' }
]
const Services = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row-reverse gap-10 items-center justify-center mt-20">
                <div className="w-[50%] grid sm:grid-cols-2 grid-cols-1 gap-5 lg:ml-12">
                    {
                        serviceList
                            .map((sCard,i) => <ServicesCards
                                key={i}
                                sCard={sCard}>
                            </ServicesCards>)
                    }

                </div>
                <div className="w-[50% space-y-5">
                    <h2 className="text-[#FF6868]  uppercase">Our Story & Services</h2>
                    <h2 className="text-4xl  font-extrabold">Our Culinary Journey <br /> And Services</h2>
                    <p>Rooted in passion, we curate unforgettable dining <br /> experiences and offer exceptional services, <br /> blending culinary artistry with warm hospitality.</p>
                    <button className="bg-green flex gap-2 text-white rounded-full px-6 btn">Explore </button>
                </div>
            </div>


        </div>

    );
};

export default Services;