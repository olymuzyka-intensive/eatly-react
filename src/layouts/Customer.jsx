import React, { useState } from "react"
// import CommentSlider from "./CommentSlider"
import Comments from "./Comments";
import Slider from "react-slick"

// import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Customer() {
    const [isActive, setIsActive] = useState(0)
    // const [isActiveComment, setIsActiveComment] = useState(1)

    const toggleActive = (index) => {
        setIsActive(index)
        // setIsActiveComment()   
    }
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ],
    // dotsClass: 'customer__slider_control',
    // baforeChange: (current, next) => {
    //     setCurrentSlide(next);
    //   }
    // appendDots: dots => (
    //     <div>
    //       <ul className="customer__slider_control">
    //         { dots }</ul>
    //     </div>
    //   ),
    // customPaging: index => (
    //         <li className={isActive === index ? "customer__button active" : "customer__button"} onClick={() => toggleActive(index)} ></li>
    //   )
  };


    const comments = [
        {
            "data": "01 Year With Us",
            "name": "Alexander R.",
            "image": "/src/img/customer_foto.jpg",
            "text": "Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time",
            "id": "1"
          },
        {
            "data": "01 Day With Us",
            "name": "Sarina.Hagenes",
            "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/549.jpg",
            "text": "perferendis libero cum",
            "id": "2"
          },
          {
            "data": "03 Month With Us",
            "name": "Kurt.Reinger",
            "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/780.jpg",
            "text": "porro minima impedit",
            "id": "3"
          }
          // https://661009aa0640280f219c2708.mockapi.io/api/v1/user
    ]

    // const control = [
    //     {}, {}, {}
    // ]

    return (        
            <div className="customer">
                <div className="container">
                    <div className="customer__row">
                        <h2 className="customer__title">Customer <span>Say</span></h2>
                        <div className="customer__card">
                                <ul className="customer__slider">
                                <div className="customer__list">  
                                {/* <CommentSlider comments={comments}/> */}
                                <Slider {...settings}>
                                {comments.map((comment, index) => 
                                        // переключение стилей 
                                            // <li key={index} className={isActive === index ? "customer__item active" : "customer__item"}>
                                            //     <div className={isActive === index ? "customer__item_top active" : "customer__item_top"}>
                                            //         <img src={comment.image} className="customer__item_img"/>
                                            //         <div className="customer__item_col">
                                            //             <div className="customer__item_name">{comment.name}</div>
                                            //             <div className="customer__item_date">{comment.data}</div>                                            
                                            //         </div>
                                            //         <div className="customer__item_decor"><img src="/src/img/decor6.png" alt="decor"/></div>
                                            //     </div>
                                            //     <div className="customer__item_row">    
                                            //         <div className={isActive === index ? "customer__item_text-active" : "customer__item_text"}>{comment.text}</div>
                                            //         <div className="customer__item_rating">
                                            //             <img src="./src/img/star.png" alt="Star"/> 
                                            //             <img src="./src/img/star.png" alt="Star"/>
                                            //             <img src="./src/img/star.png" alt="Star"/>
                                            //             <img src="./src/img/star.png" alt="Star"/>
                                            //             <img src="./src/img/star.png" alt="Star"/>
                                            //         </div>
                                            //     </div>
                                            // </li>
                                        // стили активны все, пока думаю
                                            <li key={index} className={"customer__item active" }>
                                            <div className={"customer__item_top active" }>
                                                <img src={comment.image} className="customer__item_img"/>
                                                <div className="customer__item_col">
                                                    <div className="customer__item_name">{comment.name}</div>
                                                    <div className="customer__item_date">{comment.data}</div>                                            
                                                </div>
                                                <div className="customer__item_decor"><img src="/src/img/decor6.png" alt="decor"/></div>
                                            </div>
                                            <div className="customer__item_row" >    
                                                {/* <div className={"customer__item_text-active"}>{comment.text}</div> */}
                                                <div className={"customer__item_text"}>{comment.text}</div>

                                                <div className="customer__item_rating">
                                                    <img src="./src/img/star.png" alt="Star"/> 
                                                    <img src="./src/img/star.png" alt="Star"/>
                                                    <img src="./src/img/star.png" alt="Star"/>
                                                    <img src="./src/img/star.png" alt="Star"/>
                                                    <img src="./src/img/star.png" alt="Star"/>
                                                </div>
                                            </div>
                                            </li>

                                            )
                                        }
                                </Slider>        
                                            {/* <ul className="customer__slider_control">  
                                                {comments.map((_, index) => 
                                                <li key={index} className={isActive === index ? "customer__button active" : "customer__button"} onClick={() => toggleActive(index)} ></li>
                                                // <li key={index} className={`customer__button ${currentSlide === index ? 'active' : ''}`} ></li>
                                                )}                          
                                            </ul>  */}
                                
                                </div>                                           
                                        
                                </ul>     
                            
                        </div>
                    </div>
                </div>
            </div>
        
    )
  }
  
  export default Customer