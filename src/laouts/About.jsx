function About() {

    return (
        <div className="about">
            <div className="container">
                <div className="about__row">
                    <h2 className="about__title"> We make our <br/><span>customers happy!</span></h2>
                    <p className="about__text">We have been with you for more than 6 years! All our efforts and aspirations are aimed at eventually getting the most desired result for us - happy and satisfied guests!</p>
                    <h2 className="about__title">Everyone here is busy with their own business and is busy with pleasure:</h2>
                    <ul className="about__list">
                        <li className="about__list_item">chefs create masterpieces in the kitchen</li>
                        <li className="about__list_item">couriers are in a hurry to deliver hot food to you</li>
                        <li className="about__list_item">administrators maintain the proper level of service and comfort</li>
                    </ul>
                    <div className="about__info">
                        <h2 className="about__info_title">Contacts</h2>
                        <p className="about__info_tel">
                            +375 (44) 513-93-30 <br/>
                            +375 (33) 349-00-09
                        </p>
                        <p className="about__delivery">
                            The cost of delivery starts from 4 $.
                        </p>
                        <h3 className="about__time">
                            Opening hours:
                        </h3>
                        <p className="about__time_hour">
                            Sun-Thu 10.00 - 23.00 (delivery 11.00 - 22.30) <br/>
                            Fri, Sat 10.00 - 01.00 (delivery 11.00 - 00.30)
                        </p>
                    </div>
                </div>
            </div>
        </div> 
    )
  }
  
  export default About