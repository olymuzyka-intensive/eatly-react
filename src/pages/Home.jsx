import Header from "../laouts/Header"
import Footer from "../laouts/Footer"
import Promo from "../laouts/Promo"
import Premium from "../laouts/Premium"
import Quality from "../laouts/Quality"
import Dishes from "../laouts/Dishes"
import Customer from "../laouts/Customer"

function Home() {
    return (
        <>
        <Header/>
        <div className="home">
            <Promo/>
            <Premium/> 
            <Quality/> 
            <Dishes/>
            <Customer/>
        </div>
        <Footer/>
        </>
    )
}

export default Home