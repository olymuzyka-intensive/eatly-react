import { Link } from "react-router-dom"
import articles from "../layouts/Articles"
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
                    {articles.map((article) => 
                        <li key={article.id} className="blog__item">
                            <Link to={`/blog/${article.id}`}>
                                <div className="blog__item_img">
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
                        )
                    }                             
                    </ul>
                </div>
            </div>            
        </div>
        <Questions/>
        </>
    )
}

export default Blog