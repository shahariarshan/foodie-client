import { useEffect } from "react";
import { useState } from "react";
import Card from '../home/card'

const Menu = () => {
    const [menu, setMenu] = useState([])
    const [filteredItem, setFilteredItem] = useState([])
    const [selectCategory, setSelectCategory] = useState('all')
    const [sortOptions, setSortOptions] = useState('default')
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(8)
    {/* fetching data */ }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/menu.json')
                const data = await response.json()
                // console.log(data);
                setMenu(data)
                setFilteredItem(data)
            }
            catch (error) {
                console.log('Here is some error', error);

            }
        }
        // call the function   
        fetchData()
    }, [])
    // filtering data based on category 
    const filterItems = (category) => {
        const filtered = category === 'all' ? menu : menu.filter((item) => item.category === category)
        setFilteredItem(filtered)
        setSelectCategory(category)
        setCurrentPage(1)
    }
    // show all data function 
    const showAll = () => {
        setFilteredItem(menu)
        setSelectCategory('all')
        setCurrentPage(1)
    }
    // sorting base A-Z,a-z,H-L,L-H
    const handelSortChange = (options) => {
        setSortOptions(options)
        let sortItem = [...filteredItem];
        switch (options) {
            //   for assending order 
            case "A-Z":
                sortItem.sort((a, b) => a.name.localeCompare(b.name))
                break;
            case "Z-A":
                sortItem.sort((a, b) => b.name.localeCompare(a.name))
                break;
            case "high-to-low":
                sortItem.sort((a, b) => b.price - a.price)
                break;
            case "low-to-high":
                sortItem.sort((a, b) => a.price - b.price)
                break;
            default:
                break;
        }
        setFilteredItem(sortItem)
        setCurrentPage(1)

    }
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItem.slice(indexOfFirstItem, indexOfLastItem)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)


    return (
        <div className="mt-28 ">
            {/* menu banner section  */}
            <div className="text-center items-center mx-auto space-y-4 px-7">
                <h2 className="text-4xl font-bold">Dive into Delights Of Delectable <span className="text-green">Food</span></h2>
                <p>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                <button className="bg-green mx-auto item-center  text-white rounded-full px-6 btn">Order Now</button>
            </div>
            {/* menu shop section  */}
            <div>
                {/* >Filtering and sorting */}
                {/* All category button  */}
                <div className="flex  flex-row justify-center flex-wrap items-center md:gap-6 gap-4 mt-14 mb-5">

                    <button className={`btn btn-sm bg-stone-600  rounded-2xl text-white font-mono ${selectCategory === "all" ? "active" : ""}`} onClick={showAll} >All</button>
                    <button className={`btn btn-sm bg-stone-600  rounded-2xl text-white font-mono ${selectCategory === "salad" ? "active" : ""}`} onClick={() => filterItems('salad')}>Salad</button>
                    <button className={`btn btn-sm bg-stone-600  rounded-2xl text-white font-mono ${selectCategory === "pizza" ? "active" : ""}`} onClick={() => filterItems('pizza')}>Pizza</button>
                    <button className={`btn btn-sm bg-stone-600  rounded-2xl text-white font-mono ${selectCategory === "soup" ? "active" : ""}`} onClick={() => filterItems('soup')}>Soups</button>
                    <button className={`btn btn-sm bg-stone-600  rounded-2xl text-white font-mono ${selectCategory === "dessert" ? "active" : ""}`} onClick={() => filterItems('dessert')}>Desserts</button>
                    <button className={`btn btn-sm bg-stone-600  rounded-2xl text-white font-mono ${selectCategory === "drinks" ? "active" : ""}`} onClick={() => filterItems('drinks')}>Drinks</button>
                </div>
                <div className="bg-black  mx-auto w-28 ">
                    <div className="flex text-white p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                        </svg>
                        <h2 className="ml-3">Filters</h2>
                    </div>
                    <div>
                        <select className="items-end text-center" name="sort" id="sort" onChange={(e) => handelSortChange(e.target.value)}>
                            <option value="default">Default</option>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                            <option value="high-to-low">High to low</option>
                            <option value="low-to-high">Low to high</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* all carts  */}
            <div className="grid mt-10 grid-cols-1 md:grid-cols-4 gap-5 mx-auto container">
                {
                    currentItems.map((item) => (
                        <Card key={item._id} item={item} />
                    ))
                }
            </div>
            {/* pagination  */}
            <div className="mx-auto container item-center  text-center">
                {
                    Array.from({ length: Math.ceil(filteredItem.length / itemsPerPage) }).map((_, index) => (
                        <button
                            className={` w-8 h-w-8 rounded-full text-white justify-center mt-14 ml-3 ${currentPage ===(index +1 )? ' bg-gray-500 text-white' :"bg-green"}`}
                            key={index + 1}
                            onClick={() => paginate(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))
                }
            </div>


        </div>
    );
};

export default Menu;