import Header from "../laouts/Header"
import Footer from "../laouts/Footer"

function Home() {
    return (
        <>
        <Header/>
        <div className="home">
            <div className="container">
                home content
            </div>    
        </div>
        <Footer/>
        </>
    )
}

export default Home