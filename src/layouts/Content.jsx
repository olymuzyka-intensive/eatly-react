import { Link } from "react-router-dom"
import articles from "./Articles"

function Content() {
    return (
    <>
        <div className="blog__promo">
            <div className="blog__row blog__row-top">
                <p className="blog__title-promo">
                    Top Articles
                </p>
                <ul className="blog__cards blog__cards_promo">
                    {articles.map((article, index) => {
                    if (index <= 2) return (
                        <li key={index} className="blog__item blog__item-promo">
                            <Link to={`/blog/${article.id}`}>  
                            <div className="blog__item_img blog__item_img-promo">
                            <img src={article.bg} alt="bg"/>
                            </div>
                            <div className="blog__item_title">
                                {article.title}
                            </div>
                            <div className="blog__item_card">
                                <img src={article.image} className="blog__item_logo" alt="img"/>
                                    <div className="blog__item__text">
                                        <div className="blog__item_text-1">
                                            Written By
                                        </div>
                                        <div className="blog__item_text-2">
                                            {article.name}
                                        </div>
                                    </div>
                                    <div className="blog__item_date">
                                        {article.data}
                                    </div>
                            </div>
                            </Link>                         
                        </li>   
                    )})                      
                    }                                 
                </ul>
            </div>                    
        </div>       
    </>
    )
  }
  
  export default Content