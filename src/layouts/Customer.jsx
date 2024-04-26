import React, { useState } from "react"

function Customer() {
   

    const [isActive, setIsActive] = useState(0)
    // const [isActiveComment, setIsActiveComment] = useState(1)

    const toggleActive = (index) => {
        setIsActive(index)
        // setIsActiveComment()   
    }

    // return (
    //     <div className="customer">
    //         <div className="container">
    //             <div className="customer__row">
    //                 <h2 className="customer__title">Customer <span>Say</span></h2>
    //                 <div className="customer__card">
    //                     <div className="customer__list">
    //                         <ul className="customer__slider">
    //                             <li className="customer__item customer__item-active">
    //                                 <div className="customer__item_top customer__item_top-active">
    //                                     <div className="customer__item_img"></div>
    //                                     <div className="customer__item_col">
    //                                         <div className="customer__item_name">Alexander R.</div>
    //                                         <div className="customer__item_date">01 Year With Us </div>                                            
    //                                     </div>
    //                                     <div className="customer__item_decor"><img src="/src/img/decor6.png" alt="decor"/></div>
    //                                 </div>
    //                                 <div className="customer__item_row" >    
    //                                     <div className="customer__item_text ">“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</div>
    //                                     <div className="customer__item_rating">
    //                                         <img src="./src/img/star.png" alt="Star"/>
    //                                         <img src="./src/img/star.png" alt="Star"/>
    //                                         <img src="./src/img/star.png" alt="Star"/>
    //                                         <img src="./src/img/star.png" alt="Star"/>
    //                                         <img src="./src/img/star.png" alt="Star"/>
    //                                     </div>
    //                                 </div>
    //                             </li>
    //                             <li className="customer__item">
    //                                 <div className="customer__item_top">
    //                                     <div className="customer__item_img"></div>
    //                                     <div className="customer__item_col">
    //                                         <div className="customer__item_name">Alexander R.</div>
    //                                         <div className="customer__item_date">01 Year With Us </div>                                            
    //                                     </div>
    //                                     <div className="customer__item_decor"><img src="/src/img/decor6.png"/></div>
    //                                 </div>
    //                                 <div className="customer__item_row" >    
    //                                     <div className="customer__item_text ">“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</div>
    //                                     <div className="customer__item_rating">
    //                                         <img src="./src/img/star.png" alt="Star"/>
    //                                         <img src="./src/img/star.png" alt="Star"/>
    //                                         <img src="./src/img/star.png" alt="Star"/>
    //                                         <img src="./src/img/star.png" alt="Star"/>
    //                                     </div>
    //                                 </div>
    //                             </li>
    //                             <li className="customer__item">
    //                                 <div className="customer__item_top">
    //                                     <div className="customer__item_img"></div>
    //                                     <div className="customer__item_col">
    //                                         <div className="customer__item_name">Alexander R.</div>
    //                                         <div className="customer__item_date">01 Year With Us </div>                                            
    //                                     </div>
    //                                     <div className="customer__item_decor"><img src="/src/img/decor6.png"/></div>
    //                                 </div>
    //                                 <div className="customer__item_row" >    
    //                                     <div className="customer__item_text ">“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</div>
    //                                     <div className="customer__item_rating">
    //                                         <img src="./src/img/star.png" alt="Star"/>
    //                                         <img src="./src/img/star.png" alt="Star"/>
    //                                         <img src="./src/img/star.png" alt="Star"/>
    //                                         <img src="./src/img/star.png" alt="Star"/>
    //                                         <img src="./src/img/star.png" alt="Star"/>
    //                                     </div>
    //                                 </div>
    //                             </li>
    //                         </ul>
    //                     </div>
    //                     <ul className="customer__slider_control">  
    //                     {[1, 2, 3].map((item, index) => 
    //                         // <li key={index} className={`customer__button ${isActive ? "active" : ""}`} onClick={() => toggleActive(index)} >{item}</li>
    //                         <li key={index} className={isActive === index ? "customer__button active" : "customer__button"} onClick={() => toggleActive(index)} ></li>
    //                     )}                          
    //                     </ul>    
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )

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
          },
          // https://661009aa0640280f219c2708.mockapi.io/api/v1/user
    ]

    const control = [
        {}, {}, {}
    ]

    return (
        <div className="customer">
            <div className="container">
                <div className="customer__row">
                    <h2 className="customer__title">Customer <span>Say</span></h2>
                    <div className="customer__card">
                    <ul className="customer__slider">
                    <div className="customer__list">
                                {comments.map((comment, index) =>  
                                    <li key={index} className={isActive === index ? "customer__item active" : "customer__item"}>
                                        <div className={isActive === index ? "customer__item_top active" : "customer__item_top"}>
                                            <img src={comment.image} className="customer__item_img"/>
                                            <div className="customer__item_col">
                                                <div className="customer__item_name">{comment.name}</div>
                                                <div className="customer__item_date">{comment.data}</div>                                            
                                            </div>
                                            <div className="customer__item_decor"><img src="/src/img/decor6.png" alt="decor"/></div>
                                        </div>
                                        <div className="customer__item_row" >    
                                            <div className={isActive === index ? "customer__item_text-active" : "customer__item_text"}>{comment.text}</div>
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
                                    <ul className="customer__slider_control">  
                                        {control.map((item, index) => 
                                        <li key={index} className={isActive === index ? "customer__button active" : "customer__button"} onClick={() => toggleActive(index)} ></li>
                                        )}                          
                                    </ul>   
                                </div>   
                                
                    </ul>                          
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default Customer