import React from 'react';
import './Profile.css';
import Typical from 'react-typical';
import facebook from '../../assets/Home/icon/fb.png'
import github from '../../assets/Home/icon/gh.png';
import instagram from '../../assets/Home/icon/ig.png';
import linkedin from '../../assets/Home/icon/li.png';
import twitter from '../../assets/Home/icon/tw.png';
import ScrollService from '../../utilities/ScrollService';

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className="profile-parent">
                <div className="profile-detail">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href="https://github.com/rahulsaini-js" target="_blank">
                                <img src={github} alt="gh" />
                            </a>
                            <a href="https://www.linkedin.com/in/rahul-saini-5253b2255" target="_blank">
                                <img src={linkedin} alt="li" />
                            </a>
                            <a href="https://twitter.com/rahulsaini0206" target="_blank">
                                <img src={twitter} alt="tw" />
                            </a>
                            <a href="https://www.instagram.com/rahulsaini0206/" target="_blank">
                                <img src={instagram} alt="ig" />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100069927889408" target="_blank">
                                <img src={facebook} alt="fb" />
                            </a>


                            {/* <a href="#">
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href="#">
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href="#">
                            <i className='fa fa-youtube-square'></i>
                        </a>
                        <a href="#">
                            <i className='fa fa-twitter-square'></i>
                        </a> */}

                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello I'M <span className="highlighted-text">Rahul</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        'PHP Dev 🚀', 2000,
                                        'REACT js 🔥 ', 2000,
                                        'MySQL ☁', 2000,
                                        'JAVASCRIPT 🌍', 2000,
                                        'HTML & CSS 🌈', 2000,
                                        'C / C++ 🌞', 2000,
                                    ]}
                                    wrapper="p"
                                />
                            </h1>
                            <span className="">
                                To secure a good position in a reputable organisation<br />  to fully utilize and expand not only the knowledge<br />
                                but also the learnings and skills, while making a<br /> contribution to the success of the company<br />
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                            {" "}
                            Hire Me{" "}
                        </button>
                        <a href="rahul's resume.pdf" download="rahul's resume.pdf">
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
            </div>
        </div>
    )
}



export default Profile