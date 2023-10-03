import React from "react";
import './work.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const Work = () => {
    return (
        <section id="worksection">
            <h2 className="portfolioTitle">My Portfolio</h2>
            <p className="portfolioDescription">Here is a collection of some of my projects.</p>
            <div className="portfolioImage-grid">
                <img src={Portfolio1} className="portfolioImage"></img>
                <img src={Portfolio2} className="portfolioImage"></img>
                <img src={Portfolio3} className="portfolioImage"></img>
                <img src={Portfolio4} className="portfolioImage"></img>
                <img src={Portfolio5} className="portfolioImage"></img>
                <img src={Portfolio6} className="portfolioImage"></img>
            </div>
            <button className='portfolio-btn'>View More</button>
        </section>
    );
}

export default Work;