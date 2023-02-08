import gitHub from "./../img/icons/gitHub-black.svg"
import Tableau from "./../img/icons/tableau.svg"

import Carousel from './../componets/CarouselBox.js';
import { Component } from "react";


const MyProject = () => {
    return (
        <main className="section2">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">Analysis of hotels on booking.com</h1>

                    <h2 className="skills_for_project"> Python (web scraping - selenium, requests, beautifulsoup,
                        analysis and visualisation - pandas, numpy, seaborn, matplotlib, plotly), Data vizualization with Tableau
                    </h2>
                    
                    <div className="project-details__desc">

                        <h3 className="title_for_projects"> I created a project analyzing more than 15,000 European hotels from 74 cities on booking.com. 
                        The idea came from wanting to travel in Europe but not knowing where to start.</h3>

                        <ul className="lists-for_projects"> 
                            <li className="desc_lists">I parsed booking.com for information on the hotels, including name, location, rating, number of reviews, prices, and more.</li>
                            <li className="desc_lists">I used Python and various data analysis tools to analyze and visualize the data, creating over 10 graphs on topics such as the best and worst cities, hotel discounts, and popular categories.</li>
                            <li className="desc_lists">I created an interactive dashboard using Tableau to present the results, which pleasantly surprised me with how interesting it turned out.</li>
                        
                        </ul>               
                    </div>
                        <Carousel/>                  
                    <div className="div_btn">
                        <a href="https://github.com/zvarychdenys/Booking-project" className="btn-outline">
                            <img src={gitHub} alt="" style={{width: '30px', height: '30px'}} />
                            GitHub repository
                        </a>

                        <a href="https://public.tableau.com/app/profile/denys.zvarych/viz/booking_dashboard/Dashboard2?publish=yes" className="btn-outline">
                        <img src={Tableau} alt="Tableau repository" style={{width: '30px', height: '30px'}} />
                                Tableau public
                        </a>
                    </div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Ls-sWEJdJ_w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </main>
    );
}

export default MyProject;