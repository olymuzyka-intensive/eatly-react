import { useContext, useEffect, useState } from 'react';

// import { useParams } from "react-router-dom"

import { Link } from "react-router-dom"
import { MainContext } from "./Main"
import { AppContext } from '../App';


function DishesTop() {
    const {cartAdd} = useContext(AppContext)
    const data = useContext(MainContext);
   
    const dataTop = data.filter(function(item) {
        // const dataTmp = []; 
        // for (let i = 0; i < 5; i++) {
        //     const randomIndex = Math.floor(Math.random() * data.lenght);
        //     dataTmp.push(data[randomIndex])
        
        if (item.star > 4.8) {  
            return true
        } 
    // }
    })


    // const { product_id } = useParams();

    // const [product, setProduct] = useState({});

    // useEffect(() => {
    //     if (data.length > 0) {
    //         const product = data.find((item) => {
    //             return item.id == product_id
    //         });

    //         if (product.id) setProduct(product);
    //     }
    // }, [data]);

    return (
        <div className="dishes">
            <div className="container">
                <div className="dishes__row">
                    <h2 className="dishes__title">Our Top <span>Dishes</span></h2>
                    <ul className="dishes__cards">
                        {dataTop.map((item, index) => {
                            if (index <= 4)
                            return (
                            <li key={index} className="dishes__item">
                                <div className="dishes__category_card">
                                    <img src={item.image} className="dishes__item_img" alt='dish'/>
                                    <div className="dishes__item_like">
                                        <svg viewBox="0 0 12.00 12.00" enableBackground="new 0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#5C4EAE"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M8.5,1C7.5206299,1,6.6352539,1.4022217,6,2.0504761C5.3648071,1.4022827,4.4793701,1,3.5,1 C1.5670166,1,0,2.5670166,0,4.5S2,8,6,11c4-3,6-4.5670166,6-6.5S10.4329834,1,8.5,1z"></path></g></svg>                                    
                                    </div>
                                    <h4 className="dishes__category dishes__category_1">{item.subcategory}</h4>
                                    <div className="dishes__subtitle"> <a href="#">{item.title}</a></div>
                                    <div className="dishes__comment">{item.timing} •<span className="dishes__comment_star">
                                        <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.9993 21.687C17.7033 22.6197 19.2019 21.4893 18.876 19.511L18.2909 15.9589L20.7696 13.4433C22.1482 12.0443 21.5786 10.2111 19.6708 9.92245L16.2453 9.40421L14.7209 6.18842C13.867 4.38709 12.013 4.36771 11.1575 6.17244L9.62555 9.40421L6.19999 9.92245C4.29484 10.2107 3.72066 12.0423 5.10119 13.4433L7.57994 15.9589L6.99479 19.511C6.66935 21.4865 8.16507 22.621 9.87149 21.687L12.9354 20.01L15.9993 21.687Z" fill="#6C5FBC"/>
                                        </svg></span><span>{item.star}</span>   
                                    </div>
                                    <div className="dishes__price">$ {item.price}
                                        <div className="dishes__add" onClick={() => { cartAdd(item.id) }}>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            )
                        })}
                    </ul>
                    <div className="dishes__button">
                        <Link to="/menuAll" className="btn btn--view-all">View All <span> <img src="/src/img/arrow.png" alt="arrow"/> </span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default DishesTop