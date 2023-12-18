import { Helmet } from "react-helmet-async"
import Intro from "../../components/Intro"
import Categories from "./Categories"
import CustomersReview from "./CustomarsReview"
import Services from "./Services"
import SpecialDishes from "./SpecialDishes"


const Home = () => {
  return (
    <div >
      <Helmet>
      <title>Foodie | Home</title>
      </Helmet>
        <div className="mx-auto container px-6">
        <Intro/>
        <Categories/>
        <SpecialDishes/>
        <CustomersReview/>
        <Services/>
        </div>
    </div>
  )
}

export default Home