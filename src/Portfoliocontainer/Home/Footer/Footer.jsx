import React from 'react';
import './Footer.css'
import shape from "../../../assets/Home/shape.png";
import ScrollService from "../../../utilities/ScrollService";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-parent">
        {/* <img src={require ('../../../assets/Home/shape.png').default} alt="no internet connected" /> */}
        <img src={shape} alt="shape here" />
      </div>
      <div className="scroll-container">
        <button
          className="btn-scroll"
          onClick={() => ScrollService.scrollHandler.scrollToHome()}
        >
          {" "}
          <i className="fa fa-arrow-up"></i>
          
        </button>
      </div>
    </div>
  )
}

export default Footer