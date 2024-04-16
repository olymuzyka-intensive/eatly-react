import { useContext, useEffect, useState } from 'react';

// import { useParams } from "react-router-dom"

import { Link } from "react-router-dom"
import { MainContext } from "./Main"
import { AppContext } from '../App';


function DishesTop() {
    const {cartAdd} = useContext(AppContext)
    const data = useContext(MainContext);

    const dataTmp = data.filter(function(item) {
        if (item.star > 4.8) {
            return true
        }        
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
                        {dataTmp.map((item, index) => {
                            if (index <= 4)
                            return (
                            <li key={index} className="dishes__item">
                                <div className="dishes__category_card">
                                    <img src={item.image} className="dishes__img" alt='dish'/>
                                    <div className="dishes__item_like">
                                        <svg width="23" height="19" viewBox="0 0 23 19" fill="purple" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.619141 6.66326C0.619141 3.27576 3.59099 0.66748 7.0793 0.66748C8.87745 0.66748 10.4597 1.51061 11.5951 2.60156C12.7306 1.51061 14.3128 0.66748 16.111 0.66748C19.5993 0.66748 22.5712 3.27576 22.5712 6.66326C22.5712 8.98374 21.5816 11.0244 20.2106 12.7493C18.842 14.4712 17.0517 15.9327 15.3376 17.1202C14.6829 17.5737 14.0206 17.9921 13.4144 18.3009C12.8452 18.5907 12.1907 18.8563 11.5951 18.8563C10.9996 18.8563 10.3451 18.5907 9.77593 18.3009C9.16974 17.9921 8.50739 17.5737 7.85268 17.1202C6.13857 15.9327 4.34831 14.4712 2.9797 12.7493C1.60871 11.0244 0.619141 8.98374 0.619141 6.66326ZM7.0793 2.54908C4.47109 2.54908 2.50074 4.46719 2.50074 6.66326C2.50074 8.42381 3.2481 10.0629 4.4527 11.5785C5.65968 13.0971 7.28368 14.4369 8.9242 15.5735C9.54498 16.0035 10.1297 16.3695 10.6298 16.6242C11.167 16.8977 11.4781 16.9747 11.5951 16.9747C11.7122 16.9747 12.0233 16.8977 12.5605 16.6242C13.0606 16.3695 13.6453 16.0035 14.2661 15.5735C15.9066 14.4369 17.5306 13.0971 18.7376 11.5785C19.9422 10.0629 20.6896 8.42381 20.6896 6.66326C20.6896 4.46719 18.7192 2.54908 16.111 2.54908C14.613 2.54908 13.2143 3.444 12.341 4.57986C12.1629 4.81147 11.8873 4.9472 11.5951 4.9472C11.303 4.9472 11.0274 4.81147 10.8493 4.57986C9.97597 3.444 8.57725 2.54908 7.0793 2.54908Z"/>
                                        </svg> 
                                    </div>
                                    <h4 className="dishes__category dishes__category_1">{item.category}</h4>
                                    <div className="dishes__subtitle"> <a href="#">{item.subtitle}</a></div>
                                    <div className="dishes__comment">{item.comment} •<span className="dishes__comment_star">
                                        <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.9993 21.687C17.7033 22.6197 19.2019 21.4893 18.876 19.511L18.2909 15.9589L20.7696 13.4433C22.1482 12.0443 21.5786 10.2111 19.6708 9.92245L16.2453 9.40421L14.7209 6.18842C13.867 4.38709 12.013 4.36771 11.1575 6.17244L9.62555 9.40421L6.19999 9.92245C4.29484 10.2107 3.72066 12.0423 5.10119 13.4433L7.57994 15.9589L6.99479 19.511C6.66935 21.4865 8.16507 22.621 9.87149 21.687L12.9354 20.01L15.9993 21.687Z" fill="#6C5FBC"/>
                                        </svg></span><span>{item.star}</span>   
                                    </div>
                                    <div className="dishes__price">$ {item.price}<span className="dishes__price_sub">.{item.pricesub}</span>
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