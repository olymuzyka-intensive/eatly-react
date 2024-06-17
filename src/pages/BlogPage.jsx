// import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import articles from "../layouts/Articles"
import Content from '../layouts/Content'
import Blog from './Blog'

function BlogPage() {
    const { id } = useParams();
    const selectedPost = articles.find((article) => article.id === (id))

    if (!selectedPost) {
        return <div>Статья не найдена</div>;
      }
    return (
    <>
      <div className="content">
        <div className="container">
            <div className="content__row">

                <div key={selectedPost.id} className="content__title"> {selectedPost.title} </div>
                <div className="content__subtitle">
                <img src={selectedPost.image} className="blog__item_logo" alt="img"/>
                    <div className="content__text">
                        <div className="content_text-1">
                            Written By
                        </div>
                        <div className="content_text-2">
                        {selectedPost.name}
                        </div>
                    </div>
                </div>
                <img className="content__bg" src={selectedPost.bg}  alt="blogbg"/>   
                        
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
                        <Link to={`/blog/${+selectedPost.id + 1}`}>
                        <div className="content__button">
                            <button type="button" className="btn btn--next-article">Next article
                                <span><svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.55469 13.5469H22.3588" stroke="white" strokeWidth="2.25773" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M14.4561 5.64453L22.3581 13.5466L14.4561 21.4487" stroke="white" strokeWidth="2.25773" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>
                            </button>                        
                        </div>
                        </Link>
                    </div>
                    <Content />
                </div>  
            </div>
        </div> 
      </div>
    </>
    )
  }
  
  export default BlogPage