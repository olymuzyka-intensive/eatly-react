import { Link } from "react-router-dom"
import contents from "../layouts/Contents"
import GetSupersale from "../layouts/GetSupersale "
import Questions from "../layouts/Questions"

// const contents = [
//     {
//         "data": "15 MAY, 2024",
//         "title": "How To Order Food ?",
//         "name": "Olga M.",
//         "bg": "/src/img/blog_img1.jpg",
//         "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/368.jpg",
//         "text": "Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time",
//         "id": "1"
//       },
//     {
//         "data": "21 NOV, 2023",
//         "title": "How To Track The Order ?",
//         "name": "Alex Br.",
//         "bg": "/src/img/blog_img2.jpg",
//         "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1.jpg",
//         "text": "perferendis libero cum",
//         "id": "2"
//       },
//       {
//         "data": "1 SEPT, 2021",
//         "title": "How To Manage Cards ?",
//         "name": "Victoria S.",
//         "bg": "/src/img/blog_img3.jpg",
//         "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/459.jpg",
//         "text": "porro minima impedit",
//         "id": "3"
//       },
//       {
//         "data": "28 FEVR, 2023",
//         "title": "Tips & Tricks For Business",
//         "name": "Alexander R.",
//         "bg": "/src/img/blog_img4.jpg",
//         "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/379.jpg",
//         "text": "Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time",
//         "id": "4"
//       },
//     {
//         "data": "20 OCT, 2022",
//         "title": "How To Control Money ?",
//         "name": "Sarina H.",
//         "bg": "/src/img/blog_img5.jpg",
//         "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/549.jpg",
//         "text": "perferendis libero cum",
//         "id": "5"
//       },
//       {
//         "data": "15 DEC, 2023",
//         "title": "Top 5 Business Ideas",
//         "name": "Kurt R.",
//         "bg": "/src/img/blog_img6.jpg",
//         "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/7.jpg",
//         "text": "porro minima impedit",
//         "id": "6"
//       }
// ]

// export default Content
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
                    {contents.map((content, index) => 
                        <li key={index} className="blog__item">
                            <Link to="/content">
                                <div className="blog__item_img">
                                    <img src={content.bg} alt="bg"/>
                                </div>
                                <div className="blog__item_title">
                                   {content.title}
                                </div>
                                <div className="blog__item_card">
                                    <img src={content.image} className="blog__item_logo" alt="img"/>
                                    <div className="blog__item__text">
                                        <div className="blog__item_text-1">
                                            Written By
                                        </div>
                                        <div className="blog__item_text-2">
                                        {content.name}
                                        </div>
                                    </div>
                                    <div className="blog__item_date">
                                        {content.data}
                                    </div>
                                </div>
                            </Link>   
                        </li>
                        )
                    }                             
                    </ul>

                    {/* <ul className="blog__cards">
                        <li className="blog__item">
                            <Link to="/content">
                                <div className="blog__item_img">
                                    <img src="/src/img/blog_img1.jpg" alt="img"></img>
                                </div>
                                <div className="blog__item_title">
                                   {content.title}
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
                            </Link>   
                        </li>                                
                        
                        <li className="blog__item">
                            <Link to="/content">
                                <div className="blog__item_img">
                                    <img src="/src/img/blog_img2.jpg" alt="img"></img>
                                </div>
                                <div className="blog__item_title">
                                    How To Track The Order ?
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
                            </Link>    
                        </li>
                        
                        <li className="blog__item">
                            <Link to="/content">
                                <div className="blog__item_img">
                                    <img src="/src/img/blog_img3.jpg" alt="img"></img>
                                </div>
                                <div className="blog__item_title">
                                    How To Manage Cards ?
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
                            </Link>
                        </li>
                        
                        
                        <li className="blog__item">
                            <Link to="/content">
                                <div className="blog__item_img">
                                    <img src="/src/img/blog_img4.jpg" alt="img"></img>
                                </div>
                                <div className="blog__item_title">
                                    Tips & Tricks For Business
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
                            </Link>   
                        </li>
                    
                        <li className="blog__item">
                            <Link to="/content">    
                                <div className="blog__item_img">
                                    <img src="/src/img/blog_img5.jpg" alt="img"></img>
                                </div>
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
                            </Link>
                        </li>
                    
                        
                        <li className="blog__item">
                            <Link to="/content">  
                                <div className="blog__item_img">
                                    <img src="/src/img/blog_img6.jpg" alt="img"></img>
                                </div>
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
                            </Link> 
                        </li>                           
                    </ul> */}

                </div>
            </div>            
        </div>
        <Questions/>
        </>
    )
}

export default Blog