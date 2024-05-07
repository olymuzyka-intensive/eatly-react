function GetSupersale() {
    return (
        <div className="getsupersale">
            <div className="container"> 
                <div className="getsupersale__row">
                    <div className="getsupersale__title">GET 50%</div>
                    <form method="get">
                        <div className="getsupersale__form">
                            <input type="text" placeholder=" Enter Your Email Address"></input>
                            <div className='getsupersale__form_button'><button className="btn btn--subscribe" type="submit">subscribe</button></div>
                        </div>
                    </form>
                    <img className="getsupersale__row_img" src="/src/img/Food-2.png" alt="supersale"/>
                </div>
            </div>
        </div>
    )
  }
  
  export default GetSupersale