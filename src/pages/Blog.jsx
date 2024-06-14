import { Link } from "react-router-dom"

import GetSupersale from "../layouts/GetSupersale "
import Questions from "../layouts/Questions"

function Blog() {
    return (
        <>
        <GetSupersale/>
        <div className="blog">
            <div className="container">
                <div className="blog__row">
                    <h2 className="blog__title">
                        Latest <span>Articles</span>
                    </h2>
                    <ul className="blog__cards">
                        <li className="blog__item">
                            <Link to="/content">
                                <div className="blog__item_img">
                                    <img src="/src/img/blog_img1.jpg" alt="img"></img>
                                </div>
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
                            </Link>   
                        </li>                                
                        
                        <li className="blog__item">
                            <Link to="/content">
                                <div className="blog__item_img">
                                    <img src="/src/img/blog_img2.jpg" alt="img"></img>
                                </div>
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
                            </Link>    
                        </li>
                        
                        <li className="blog__item">
                            <Link to="/content">
                                <div className="blog__item_img">
                                    <img src="/src/img/blog_img3.jpg" alt="img"></img>
                                </div>
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
                            </Link>
                        </li>
                        
                        
                        <li className="blog__item">
                            <Link to="/content">
                                <div className="blog__item_img">
                                    <img src="/src/img/blog_img4.jpg" alt="img"></img>
                                </div>
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
                            </Link>   
                        </li>
                    
                        <li className="blog__item">
                            <Link to="/content">    
                                <div className="blog__item_img">
                                    <img src="/src/img/blog_img5.jpg" alt="img"></img>
                                </div>
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
                            </Link>
                        </li>
                    
                        
                        <li className="blog__item">
                            <Link to="/content">  
                                <div className="blog__item_img">
                                    <img src="/src/img/blog_img6.jpg" alt="img"></img>
                                </div>
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
                            </Link> 
                        </li>                           
                    </ul>

                </div>
            </div>            
        </div>
        <Questions/>
        </>
    )
}

export default Blog