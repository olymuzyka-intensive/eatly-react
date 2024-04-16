// import Header from "../laouts/Header"
// import Footer from "../laouts/Footer"
import Promo from "../laouts/Promo"
import Premium from "../laouts/Premium"
import Quality from "../laouts/Quality"
import Customer from "../laouts/Customer"
import DishesTop from "../laouts/DishesTop"

function Home() {
    return (
        <>
        {/* <Header/> */}
        <div className="home">
            <Promo/>
            <Premium/> 
            <Quality/> 
            <DishesTop/>
            <Customer/>
        </div>
        {/* <Footer/> */}
        </>
    )
}

export default Home