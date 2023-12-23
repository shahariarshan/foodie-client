import { useEffect } from "react";
import { useState } from "react";

const Menu = () => {
    const [menu, setMenu] = useState([])
    const [filteredItem, setFilteredItem] = useState([])
    const [selectCategory, setSelectCategory] = useState('all')
    const [sortOptions, setSortOptions] = useState('default')
    {/* fetching data */ }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('../../../public/menu.json')
                const data = await response.json()
                console.log(data);
                setMenu(data)
                setFilteredItem(data)
            }
            catch (error) {
                console.log('Here is some error', error);

            }
        }
        fetchData()
    }, [])
    return (
        <div className="mt-28 ">
            <div className="text-center items-center mx-auto space-y-4 px-7">
                <h2 className="text-4xl font-bold">Dive into Delights Of Delectable <span className="text-green">Food</span></h2>
                <p>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                <button className="bg-green mx-auto item-center  text-white rounded-full px-6 btn">Order Now</button>
            </div>
            <div>


            </div>
        </div>
    );
};

export default Menu;