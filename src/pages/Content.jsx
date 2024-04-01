import Header from "../laouts/Header"
import Footer from "../laouts/Footer"

function Content() {
    return (
    <>
    <Header/>
      <div className="content">
        <div className="container">
        <div className="content__row">
            <div className="content__title"> How To Track The Order ? </div>
            <div className="content__subtitle">
                    <div className="content_logo"></div>
                    <div className="content__text">
                        <div className="content_text-1">
                            Written By
                        </div>
                        <div className="content_text-2">
                            Perperzon
                        </div>
                    </div>
                </div>
                <img className="content__bg" src="/src/img/blog_contet_promo.jpg" alt="blog"/>                   
            </div>
            
            <div className="content__promo">
                <div className="content__article">
                    <div className="content__article_title">
                        Browse restaurants and menus
                    </div>
                    <div className="content__article_text">
                        Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.
                        <ul className="content__article_list">
                            <li>It was popularized in the 1960s with the release</li>
                            <li>Lorem Ipsum passages, and more recently </li>
                        </ul>
                    </div>
                    <div className="content__article_title">
                        Select your items
                    </div>
                    <div className="content__article_text">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. 
                    </div>
                    <div className="content__article_title">
                        Place your order
                    </div>
                    <div className="content__article_text">
                        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
                    </div>
                    <div className="header__button">
                        <button type="button" className="btn btn--next-article">Next article
                            <span><svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.55469 13.5469H22.3588" stroke="white" strokeWidth="2.25773" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14.4561 5.64453L22.3581 13.5466L14.4561 21.4487" stroke="white" strokeWidth="2.25773" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>

                <div className="blog__promo">
                    <div className="blog__row blog__row-top">
                        <p className="blog__title_promo">
                            Top Articles
                        </p>
                        <ul className="blog__cards blog__cards_promo">
                            <li className="blog__item blog__item-promo">
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
                            <li className="blog__item blog__item-promo">
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
                            <li className="blog__item blog__item-promo">
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
                        </ul>
                    </div>                    
                </div>        
            </div>    
        </div>
    </div>
    <Footer/>
    </>
    )
  }
  
  export default Content