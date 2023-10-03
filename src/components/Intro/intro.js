import react from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import bg from '../../assets/image.png';
import ViewMoreImg from '../../assets/hireme.png';

const Intro = () => {
    return(
    <section id="intro">
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className="introText">My name is <span className="myIntroName">Victory</span> <br></br>
                    -Web Developer-
                </span>
                <p className="introParagraph">This is my journey of creating aesthetically-pleasing 
                <br></br>and user-friendly websites.
                 </p>
                <Link>
                    <button className='btn'><img src={ViewMoreImg} className='btnImg'></img>View More</button>
                </Link>
                
            </div>
            <img src={bg} alt='profile-image' className='bg'></img>
    </section>
    );
}

export default Intro;