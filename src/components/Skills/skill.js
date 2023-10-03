import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skill = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I Do</span>
            <span className='skillDescription'>Enthusiastic and motivated entry-level front-end developer 
            with a solid grasp of HTML, CSS, JavaScript and ReactJS fundamentals. Eager to apply 
            my skills and passion for web development in the creation of visually appealing 
            and user-friendly websites and web applications.</span>
            <div className='skillBars'>
                <div className='skillBar_Item'>
                    <img src={UIDesign} className='skillBar_Item_Image'></img>
                    <div className='skillBar_Item_Text'>
                        <h2>UI/UX Design</h2>
                        <p>This is demo text.</p>
                    </div>

                </div>

                <div className='skillBar_Item'>
                    <img src={WebDesign} className='skillBar_Item_Image'></img>
                    <div className='skillBar_Item_Text'>
                        <h2>Website Development</h2>
                        <p>This is demo text.</p>
                    </div>

                </div>

                <div className='skillBar_Item'>
                    <img src={AppDesign} className='skillBar_Item_Image'></img>
                    <div className='skillBar_Item_Text'>
                        <h2>App Design</h2>
                        <p>This is demo text.</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Skill;