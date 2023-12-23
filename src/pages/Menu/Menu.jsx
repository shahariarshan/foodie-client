import { useEffect } from "react";
import { useState } from "react";
import Card from '../home/card'

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
    }
    // show all data function 
    const showAll =()=>{
        setFilteredItem(menu)
        setSelectCategory('all')
    }
    // sorting base A-Z,a-z,H-L,L-H
    const handelSortChange = (options)=>{
        setSortOptions(options)
        let sortItem =[...filteredItem];
        switch(options) {

            case "A-Z":
            //   for assending order 
            sortItem.sort((a,b)=>a.name.localCompare(b.name))
              break;
            case "Z-A":
                sortItem.sort((a,b)=>b.name.localCompare(a.name))
              break;
            
              
            case "high to low":
                sortItem.sort((a,b)=>b.price-a.price)
              break;
            case " low to high ":
                sortItem.sort((a,b)=>a.price-b.price)
              break;
              default:
                break;     
          }
          setFilteredItem(sortItem)

    }


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
                    
                    <button onClick={showAll}>All</button>
                    <button onClick={()=>filterItems('salad')}>Salad</button>
                    <button onClick={()=>filterItems('pizza')}>Pizza</button>
                    <button onClick={()=>filterItems('soup')}>Soups</button>
                    <button  onClick={()=>filterItems('dessert')}>Desserts</button>
                    <button  onClick={()=>filterItems('drinks')}>Drinks</button>
                </div>
                {/* all carts  */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mx-auto container">
                    {
                        filteredItem.map((item)=>(
                            <Card key={item._id} item={item}/>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Menu;