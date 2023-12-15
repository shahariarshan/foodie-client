import Intro from "../../components/Intro"
import Categories from "./Categories"
import SpecialDishes from "./SpecialDishes"


const Home = () => {
  return (
    <div >
        <div className="mx-auto container px-6">
        <Intro/>
        <Categories/>
        <SpecialDishes/>
        </div>
    </div>
  )
}

export default Home