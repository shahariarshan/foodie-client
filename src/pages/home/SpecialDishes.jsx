
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import Card from "./card";

const SpecialDishes = () => {
    const [recipes, setRecipes] = useState([])
    const slider = useRef(null)

    useEffect(() => {
        fetch("/menu.json")
            .then((res) => res.json())
            .then((data) => {
                const categoryFilter = data.filter((item) => item.category === "popular")
                // console.log(categoryFilter);
                setRecipes(categoryFilter)
            })
    }, [])
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="mt-16 ">
            <div >
                <div className="space-y-2">
                    <h2 className="text-[#FF6868]  uppercase">Special Dishes</h2>
                    <h3 className="text-4xl  font-extrabold">Standout Dishes <br /> From Our Menu</h3>
                </div>

            </div>
            <div className="mt-10 px-10">
                <Slider {...settings}>
                    {
                        recipes.map((item, i) => <Card
                            key={i}
                            item={item}>
                        </Card>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default SpecialDishes;