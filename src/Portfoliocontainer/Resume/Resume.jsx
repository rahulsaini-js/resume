// import React, { useState } from 'react';
// import './Resume.css';
// import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
// import ScrollService from '../../utilities/ScrollService';
// import Animations from '../../utilities/Animations';

// const Resume = (props) => {
//     const [selectBulletIndex, setSelectBulletIndex] = useState(0);
//     const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});


//     let fadeInScreenHandler = (screen) => {
//         if (screen.fadeScreen !== props.id)
//             return
//         Animations.animations.fadeInScreen(props.id)
//     }
//     const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


//     const ResumeHeading = (props) => {
//         return (
//             <div className="resume-heading">
//                 <div className="resume-main-heading">
//                     <div className="heading-bullet"></div>
//                     <span>{props.heading ? props.heading : ""}</span>
//                     {props.fromDate && props.toDate ? (
//                         <div className="heading-date">
//                             {props.fromDate + "-" + props.toDate}
//                         </div>
//                     ) : (
//                         <div></div>
//                     )}
//                 </div>
//                 <div className="resume-sub-heading">
//                     <span>{props.subHeading ? props.subHeading : ""}</span>
//                 </div>
//                 <div className="resume-heading-description">
//                     <span>{props.description ? props.description : ""}</span>
//                 </div>
//             </div>

//         )

//     };

//     const resumeBullets = [

//         { label: "Education", logoSrc: "education.svg" },
//         { label: "Work History", logoSrc: "work-history.svg" },
//         { label: "Programming Skills", logoSrc: "programming-skills.svg" },
//         { label: "Projects", logoSrc: "projects.svg" },
//         { label: "Interests", logoSrc: "interests.svg" },

//     ];

//     const programmingSkillsDetails = [
// { skill: "Javascript", ratingPercentage: 85 },
// { skill: "React.js", ratingPercentage: 65 },
// { skill: "php", ratingPercentage: 65 },
// { skill: "MySQL", ratingPercentage: 80 },
// { skill: "Node JS", ratingPercentage: 65 },
// { skill: "Mongo Db", ratingPercentage: 75 },
// { skill: "SQL Server", ratingPercentage: 90 },
// { skill: "HTML", ratingPercentage: 60 },
// { skill: "CSS", ratingPercentage: 65 },
//     ];

//     const projectsDetails = [
// {
//     title: "REACT.js Modern UI/UX Responsive Web Application ",
//     duration: { fromDate: "May 2022", toDate: "June 2022" },
//     description:<a href="https://rahulsaini-js.github.io/React-WEBAPP/" target="_blank">CLICK HERE 🔥 </a>
//     ,
//     subHeading: "Technologies Used: REACT.js,JAVASCRIPT, HTML,CSS,NODE.js",
// },
// {
//     title: " Modern React 18 Fitness Exercises App With APIs ",
//     duration: { fromDate: "September 2022", toDate: "present" },
//     description:
//         " ",
//     subHeading:
//         "Technologies Used:  React.js,MaterialUI,Rapid API",
// },

//     ];

//     const resumeDetails = [
//         <div className="resume-screen-container" key="education">

//             <ResumeHeading
//                 heading={"pt. C.L.S. govt. PG college karnal,KURUKSHETRA UNIVERSITY"}
//                 subHeading={"B.Sc. COMPUTER SCIENCE"}
//                 fromDate={"2019"}
//                 toDate={"2022"}
//             />

//             <ResumeHeading
//                 heading={"Guru Nanak Sen. Sec. School,Kurukshetra"}
//                 subHeading={"12th--70%"}
//                 fromDate={"2018"}
//                 toDate={"2019"}
//             />

//             <ResumeHeading
//                 heading={"Guru Nanak Sen. Sec. School,Kurukshetra"}
//                 subHeading={"10th--88%"}
//                 fromDate={"2016"}
//                 toDate={"2017"}
//             />
//         </div>,
//         <div className="resume-screen-container" key="work-experience">

//             <ResumeHeading
//                 heading={"NULL"}
//                 subHeading={"NULL"}
//                 fromDate={"none"}
//                 toDate={"none"}
//             />
//             <div className="experience-description">
//                 <span className="resume-description-text">
//                    NULL
//                 </span>
//             </div>
//             <div className="experience-description">
//                 <span className="resume-description-text">
//                    NULL
//                 </span>
//                 <br />

//             </div>

//         </div>,
//         /* PROGRAMMING SKILLS */
//         <div className="resume-screen-container programming-skills-container" key="programming-skills">
//             {programmingSkillsDetails.map((skill, index) => (
//                 <div className="skill-parent" key={index}>
//                     <div className="heading-bullet"></div>
//                     <span>{skill.skill}</span>
//                     <div className="skill-percentage">
//                         <div
//                             style={{ width: skill.ratingPercentage + "%" }}
//                             className="active-percentage-bar"
//                         ></div>
//                     </div>
//                 </div>
//             ))}
//         </div>,
//         /* PROJECTS */
//         <div className="resume-screen-container" key="projects">
//             {projectsDetails.map((projectsDetails, index) => (
//                 <ResumeHeading
//                     key={index}
//                     heading={projectsDetails.title}
//                     subHeading={projectsDetails.subHeading}
//                     description={projectsDetails.description}
//                     fromDate={projectsDetails.duration.fromDate}
//                     toDate={projectsDetails.duration.toDate}
//                 />
//             ))}
//         </div>,

//         /* Interests */
//         <div className="resume-screen-container" key="interests">
//             <ResumeHeading
//                 heading="Sports"
//                 description="Like to calisthenics, Running and swimming."
//             />
//             <ResumeHeading
//                 heading="Gamming"
//                 description="Love to PLay multiplayer video gaming as a team-building activity and as a way to de-stress."
//             />
//             <ResumeHeading
//                 heading="Sketching"
//                 description="Sketching is a best way for me to refresh mind and to focus."
//             />

//             <ResumeHeading
//                 heading="Listening to music"
//                 description="Listening to music lowers stress and elevates your mood. It strengthens learning and memory abilities, too."
//             />
//         </div>,


//     ];




//     const handleCarousal = (index) => {
//         let offsetHeight = 360;

//         let newCarousalOffset = {
//             style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
//         };

//         setCarousalOffSetStyle(newCarousalOffset);
//         setSelectBulletIndex(index);
//     };


//     const getBullets = () => {
//         return resumeBullets.map((bullet, index) => (
//             <div
//                 onClick={() => handleCarousal(index)}
//                 className={
//                     index === selectBulletIndex ? "bullet selected-bullet" : "bullet"
//                 }
//                 key={index}
//             >
//                 <img
//                     className="bullet-logo"
//                     src={require(`../../assets/Resume/${bullet.logoSrc}`)}
//                     alt="B"
//                 />
//                 <span className="bullet-label">{bullet.label}</span>
//             </div>
//         ));
//     };


//     const getResumeScreens = () => {
//         return (
//             <div
//                 style={carousalOffSetStyle.style}
//                 className="resume-details-carousal"
//             >
//                 {resumeDetails.map((ResumeDetail) => ResumeDetail)}
//             </div>
//         );
//     };






//     return (
//         <div className='resume-container screen-container' id={props.id || ""}>
//             <div className="resume-content">
//                 <ScreenHeading title={"Resume"} subHeading={"my formal BioData"} />
//                 <div className="resume-card">
//                     <div className="resume-bullets">
//                         <div className="bullet-container">
//                             <div className="bullet-icons"></div>
//                             <div className="bullets">{getBullets()}</div>
//                         </div>
//                     </div>
//                     <div className="resume-bullet-detail">{getResumeScreens()}</div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Resume;



import React, { useState, useEffect } from 'react';
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({})

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    //   { label: "Application Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "Javascript", ratingPercentage: 85 },
    { skill: "React.js", ratingPercentage: 65 },
    { skill: "php", ratingPercentage: 65 },
    { skill: "MySQL", ratingPercentage: 80 },
    { skill: "Node JS", ratingPercentage: 65 },
    { skill: "Mongo Db", ratingPercentage: 75 },
    { skill: "SQL Server", ratingPercentage: 90 },
    { skill: "HTML", ratingPercentage: 60 },
    { skill: "CSS", ratingPercentage: 65 },
  ];

  //   const applicationSkillsDetails = [
  //       { skill: "PowerBI", ratingPercentage: 80 },
  //       { skill: "Talend Open Studio", ratingPercentage: 85 },
  //       { skill: "ArcGIS Platform", ratingPercentage: 85 },
  //       { skill: "Grafana", ratingPercentage: 75 },
  //       { skill: "Azure Cloud Server", ratingPercentage: 50 },
  //       { skill: "E&P - Petrel", ratingPercentage: 70 },
  //       { skill: "E&P - Kingdom", ratingPercentage: 85 },
  //       { skill: "E&P - Hampson-Russell", ratingPercentage: 85 },
  //       { skill: "E&P - Paradigm", ratingPercentage: 75 },
  //     ];

  const projectsDetails = [
    {
      title: "REACT.js Modern UI/UX Responsive Web Application ",
      duration: { fromDate: "May 2022", toDate: "June 2022" },
      description: <a href="https://rahulsaini-js.github.io/React-WEBAPP/" target="_blank">CLICK HERE 🔥 </a>
      ,
      subHeading: "Technologies Used: REACT.js,JAVASCRIPT, HTML,CSS,NODE.js",
    },
    {
      title: " Modern React 18 Fitness Exercises App With APIs ",
      duration: { fromDate: "September 2022", toDate: "October 2022" },
      description: <a href="https://rsgym.netlify.app/" target="_blank">CLICK HERE 🔥 </a>
      ,
      subHeading:
        "Technologies Used:  React.js,MaterialUI,Rapid API",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"pt. C.L.S. govt. PG college karnal,KURUKSHETRA UNIVERSITY"}
        subHeading={"B.Sc. COMPUTER SCIENCE"}
        fromDate={"2019"}
        toDate={"2022"}
      />

      <ResumeHeading
        heading={"Guru Nanak Sen. Sec. School,Kurukshetra"}
        subHeading={"12th--70%"}
        fromDate={"2018"}
        toDate={"2019"}
      />

      <ResumeHeading
        heading={"Guru Nanak Sen. Sec. School,Kurukshetra"}
        subHeading={"10th--88%"}
        fromDate={"2016"}
        toDate={"2017"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"NULL"}
          subHeading={"NULL"}
          fromDate={"NULL"}
          toDate={"NULL"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            NULL
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            NULL
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div className="resume-screen-container programming-skills-container" key="programming-skills">
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* Application SKILLS */
    //   <div className="resume-screen-container application-skills-container" key="application-skills">
    //     {applicationSkillsDetails.map((skill, index) => (
    //       <div className="skill-parent" key={index}>
    //         <div className="heading-bullet"></div>
    //         <span>{skill.skill}</span>
    //         <div className="skill-percentage">
    //           <div
    //             style={{ width: skill.ratingPercentage + "%" }}
    //             className="active-percentage-bar"
    //           ></div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Sports"
        description="Like to calisthenics, Running and swimming."
      />
      <ResumeHeading
        heading="Gamming"
        description="Love to PLay multiplayer video gaming as a team-building activity and as a way to de-stress."
      />
      <ResumeHeading
        heading="Sketching"
        description="Sketching is a best way for me to refresh mind and to focus."
      />

      <ResumeHeading
        heading="Listening to music"
        description="Listening to music lowers stress and elevates your mood. It strengthens learning and memory abilities, too."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

