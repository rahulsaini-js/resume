// import React from 'react';
import './ContactMe.css';
import { axios } from "axios";
import { toast } from "react-toastify";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading"
import imgBack from "../../images/mailz.jpeg";
import load2 from "../../images/load2.gif";
import ScrollService from "../../utilities/ScrollService"
import Animations from '../../utilities/Animations';
import Typical from "react-typical"
import facebook from '../../assets/Home/icon/fb.png'
import github from '../../assets/Home/icon/gh.png';
import instagram from '../../assets/Home/icon/ig.png';
import linkedin from '../../assets/Home/icon/li.png';
import twitter from '../../assets/Home/icon/tw.png';
import { useState } from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactMe = (props) => {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_zti1roi', 'template_tqiwttk', form.current, '-w-xr3imW3kytlc1m')
        .then((result) => {
            console.log(result.text);
            alert("sent successfully 😊");
        }, (error) => {
            console.log(error.text);
            alert("Not able to sent 😥");

        });
    };


    return (
        <div className='main-container' id={props.id || " "} >
            <ScreenHeading title={"Contact Me"} subHeading={"Lets Keep In Touch"} />
            <div className="central-form">
                <div className="col">
                    <h2 className="title">
                        <Typical
                            loop={Infinity}
                            steps={[
                                'Get In Touch 📧', 2000,
                                'Waiting . . .⏳ ', 2000,
                                'Thanks for connecting 📈', 2000,
                                'Please Respond 😊', 2000,
                            ]}
                            wrapper="p"
                        />
                    </h2>
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
                </div>
                <div className="back-form">
                    <div className="img-back">
                        <h4>Send Your Email Here</h4>
                        <img src={imgBack} alt="Can't load image" />
                    </div>
                    <form ref={form} onSubmit={sendEmail}> 
                        {/* <p>{banner}</p> */}
                        <label htmlFor="name">Name</label>
                        <input type="text"  name="name"/>

                        <label htmlFor="email">Email</label>
                        <input type="email"  name="email"/>

                        <label htmlFor="message">Message</label>
                        <textarea type="text" name="message"/>

                        <div className="send-btn">
                            <button type='submit'>
                                send 
                                <i className='fa fa-paper-plane'/>
                                {/* {bool ? (
                                    <b className='load'>
                                        <img src={load2} alt="sending...." />
                                    </b>
                                ) : (" ")} */}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactMe