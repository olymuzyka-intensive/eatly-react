// import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import articles from "../layouts/Articles"
import Content from '../layouts/Content'

function BlogPage() {
    const { id } = useParams();
    const selectedPost = articles.find((article) => article.id === (id))

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
                            {selectedPost.caption1}
                        </div>
                        <div className="content__article_text">
                            {selectedPost.text1}
                        </div>
                        <div className="content__article_title">
                            {selectedPost.caption2}
                        </div>
                        <div className="content__article_text">
                            {selectedPost.text2}                        
                        </div>
                        <div className="content__article_title">
                            {selectedPost.caption3}
                        </div>
                        <div className="content__article_text">
                            {selectedPost.text3}                        
                        </div>
                       {selectedPost.id < 6 ? <Link to={`/blog/${+selectedPost.id + 1}`}>
                        <div className="content__button">
                            <button type="button" className="btn btn--next-article">Next article
                                <span><svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.55469 13.5469H22.3588" stroke="white" strokeWidth="2.25773" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M14.4561 5.64453L22.3581 13.5466L14.4561 21.4487" stroke="white" strokeWidth="2.25773" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>
                            </button>                        
                        </div>
                        </Link> : '' }
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