function Getsupersale() {

    return (
        <div className="supersale">
            <div className="container"> 
                <div className="supersale__row">
                    <div className="supersale__promo">
                    <img className='supersale__promo_decor' src="/src/img/decor7.svg" alt="decor"/>
                        <ul className="supersale__slider">
                                <li className="supersale__slider_item supersale__slider_item-active">
                                    <div className="supersale__slider_title">GET 50%</div>
                                    <div className="supersale__slider_weekend">WEEKENDS</div>
                                    <img className="supersale__slider_img" src="/src/img/Food-2.png" alt="supersale"/>
                                </li>
                                <li className="supersale__slider_item">
                                    <div className="supersale__slider_title">GET 30%</div>
                                    <div className="supersale__slider_weekend">TODAY</div>
                                    <img className="supersale__slider_img" src="/src/img/Food-3.png" alt="supersale"/>
                                </li>
                                <li className="supersale__slider_item">
                                    <div className="supersale__slider_title">GET 20%</div>
                                    <div className="supersale__slider_weekend">MONTH</div>
                                    <img className="supersale__slider_img" src="/src/img/Food-1.png" alt="supersale"/>
                                </li>
                        </ul>

                        <ul className="supersale__line">
                            <li className="supersale__line_item supersale__line_item-active"></li> 
                            <li className="supersale__line_item"></li> 
                            <li className="supersale__line_item"></li>
                        </ul>
                        <div className="search">
                            <input type="search" placeholder="Search"/>
                            <button className="btn btn--search" type="submit"> <img src="src/img/Search.svg" alt="search"/></button>
                        </div>
                    </div>
                    
                    <div className="category">
                        <div className="category__card">
                            <div className="category__title">Category</div>
                            <ul className="category__list">
                                <li className="category__item ">
                                    <h4 className="category__item_title category__item_title-1">Pizza</h4>
                                </li>
                                <li className="category__item category__item-active" >
                                    <h4 className="category__item_title category__item_title-2">Asian</h4>
                                </li>
                                <li className="category__item">
                                    <h4 className="category__item_title category__item_title-3">Donat</h4>
                                </li>
                                <li className="category__item">
                                    <h4 className="category__item_title category__item_title-4">Ice</h4>
                                </li>
                            </ul>
                            <div className="category__title">Sort By</div>
                            <div className="category__card_col">
                                <div className="category__card_row">
                                    <div className="category__card_history">Recomended</div>
                                    <div className="category__card_history category__card_history-active">Fast Delivery</div>
                                </div>
                                <div className="category__card_history">Most Popular</div> 
                           </div>
                            <div className="category__title">Price</div>
                            <div className="category__title_line"> <div className="category__title_circle"></div></div>
                            
                            <ul className="category__price">
                                <li className="category__price_item">$ 0</li>
                                <li className="category__price_item">$ 25</li>
                                <li className="category__price_item">$ 50</li>
                                <li className="category__price_item">$ 100</li>
                                <li className="category__price_item">$ 500</li>
                                <li className="category__price_item">$ 1000</li>
                            </ul>
                            <div className="categotyr__button">
                                <button type="button" className="btn btn--apply">Apply</button>
                            </div>
                        </div>
                    </div>                
                </div>    
            </div>
        </div>

)
  }
  
  export default Getsupersale