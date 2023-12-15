import '../../App.css'
const categoryItems = [
    { id: 1, title: "Main Dish", des: "(86 dishes)", img: "/images/home/category/img1.png" },
    { id: 2, title: "Break Fast", des: "(12 break fast)", img: "/images/home/category/img2.png" },
    { id: 3, title: "Dessert", des: "(48 dessert)", img: "/images/home/category/img3.png" },
    { id: 4, title: "Browse All", des: "(255 Items)", img: "/images/home/category/img4.png" }
]
const Categories = () => {
    return (
        <div className="mt-10">
            <div className="space-y-6">
                <h5 className="subtitle">Customer Favorites</h5>
                <header className="title">Popular Catagories</header>
            </div>
            {/* category items  */}
            <div className='flex flex-col px-20 sm:flex-row flex-wrap gap-3 justify-around mt-12  items-center'>
                {
                    categoryItems.map((item, i) => (
                       <div key={i} className='shadow-2xl bg-white px-8 py-3 hover:-translate-y-3 duration-100 transition-all'>
                         <div >
                         <img src={item.img} alt="" className='rounded-full w-28 h-28 p-5 bg-[#C1F1C6]'/>
                        </div>
                        <div className='text-center'>
                          <p className='text-[#1E1E1E] font-semibold '>{item.title}</p>
                          <p>{item.des}</p>
                        </div>
                       </div>

                    ))

                }
            </div>
        </div>
    );
};

export default Categories;