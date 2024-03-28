import Header from "../laouts/Header"
import Footer from "../laouts/Footer"

function Blog() {
    return (
        <>
        <Header/>
        <div className="blog">
            <div className="container">
                <div className="blog__row">
                    <h2 className="blog__title">
                        Latest <span>Articles</span>
                    </h2>
                    <ul className="blog__cards">
                        <li className="blog__item">
                            <a href="blog_page.html">
                                <div className="blog__item_img blog__item_img-1"></div>
                                <div className="blog__item_title">
                                    How To Order Food ?
                                </div>
                                <div className="blog__item_card">
                                    <div className="blog__item_logo"></div>
                                    <div className="blog__item__text">
                                        <div className="blog__item_text-1">
                                            Written By
                                        </div>
                                        <div className="blog__item_text-2">
                                            Perperzon
                                        </div>
                                    </div>
                                    <div className="blog__item_date">
                                        15 DEC, 2022
                                    </div>
                                </div>
                            </a>   
                        </li>                                
                        
                        <li className="blog__item">
                            <a href="blog_page.html">
                                <div className="blog__item_img blog__item_img-2"></div>
                                <div className="blog__item_title">
                                    How To Track The Order ?
                                </div>
                                <div className="blog__item_card">
                                    <div className="blog__item_logo"></div>
                                    <div className="blog__item__text">
                                        <div className="blog__item_text-1">
                                            Written By
                                        </div>
                                        <div className="blog__item_text-2">
                                            Perperzon
                                        </div>
                                    </div>
                                    <div className="blog__item_date">
                                        15 DEC, 2022
                                    </div>
                                </div>
                            </a>    
                        </li>
                        
                        <li className="blog__item">
                            <a href="blog_page.html">
                                <div className="blog__item_img blog__item_img-3"></div>
                                <div className="blog__item_title">
                                    How To Manage Cards ?
                                </div>
                                <div className="blog__item_card">
                                    <div className="blog__item_logo"></div>
                                    <div className="blog__item__text">
                                        <div className="blog__item_text-1">
                                            Written By
                                        </div>
                                        <div className="blog__item_text-2">
                                            Perperzon
                                        </div>
                                    </div>
                                    <div className="blog__item_date">
                                        15 DEC, 2022
                                    </div>
                                </div>
                            </a>
                        </li>
                        
                        
                        <li className="blog__item">
                            <a href="blog_page.html">
                                <div className="blog__item_img blog__item_img-4"></div>
                                <div className="blog__item_title">
                                    Tips & Tricks For Business
                                </div>
                                <div className="blog__item_card">
                                    <div className="blog__item_logo"></div>
                                    <div className="blog__item__text">
                                        <div className="blog__item_text-1">
                                            Written By
                                        </div>
                                        <div className="blog__item_text-2">
                                            Perperzon
                                        </div>
                                    </div>
                                    <div className="blog__item_date">
                                        15 DEC, 2022
                                    </div>
                                </div>
                            </a>   
                        </li>
                    
                        <li className="blog__item">
                            <a href="blog_page.html">    
                                <div className="blog__item_img blog__item_img-5"></div>
                                <div className="blog__item_title">
                                    How To Control Money ?
                                </div>
                                <div className="blog__item_card">
                                    <div className="blog__item_logo"></div>
                                    <div className="blog__item__text">
                                        <div className="blog__item_text-1">
                                            Written By
                                        </div>
                                        <div className="blog__item_text-2">
                                            Perperzon
                                        </div>
                                    </div>
                                    <div className="blog__item_date">
                                        15 DEC, 2022
                                    </div>
                                </div>
                            </a>
                        </li>
                    
                        
                        <li className="blog__item">
                            <a href="blog_page.html">  
                                <div className="blog__item_img blog__item_img-6"></div>
                                <div className="blog__item_title">
                                    Top 5 Business Ideas
                                </div>
                                <div className="blog__item_card">
                                    <div className="blog__item_logo"></div>
                                    <div className="blog__item__text">
                                        <div className="blog__item_text-1">
                                            Written By
                                        </div>
                                        <div className="blog__item_text-2">
                                            Perperzon
                                        </div>
                                    </div>
                                    <div className="blog__item_date">
                                        15 DEC, 2022
                                    </div>
                                </div>
                            </a> 
                        </li>                           
                    </ul>

                </div>
            </div>            
        </div>
        <Footer/>
        </>
    )
}

export default Blog