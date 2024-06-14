import Promo from "../layouts/Promo"
import Premium from "../layouts/Premium"
import Quality from "../layouts/Quality"
import Customer from "../layouts/Customer"
import DishesTop from "../layouts/DishesTop"

function Home() {
    return (
        <>
        <div className="home">
            <Promo/>
            <Premium/> 
            <Quality/> 
            <DishesTop/>
            <Customer/>
        </div>
        </>
    )
}

export default Home