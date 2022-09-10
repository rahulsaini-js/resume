import Home from "../Portfoliocontainer/Home/Home";
import AboutMe from "../Portfoliocontainer/AboutMe/AboutMe";
import Resume from "../Portfoliocontainer/Resume/Resume";
import Testimonial from "../Portfoliocontainer/Testimonial/Testimonial";
import ContactMe from "../Portfoliocontainer/ContactMe/ContactMe";


export const TOTAL_SCREENS = [
    {
        screen_name: "Home",
        Component: Home,

    },
    {
        screen_name: "AboutMe",
        Component: AboutMe,

    },
    {
        screen_name: "Resume",
        Component: Resume,

    },
    {
        screen_name: "Testimonial",
        Component: Testimonial,

    },
    {
        screen_name: "ContactMe",
        Component: ContactMe,

    },
];

// export const GET_SCREEN_INDEX = (screen_name) => {
//     if (!screen_name) return -1
//     for (let i = 0; i < TOTAL_SCREENS.length; i++) {
//         if (TOTAL_SCREENS[i].screen_name === screen_name) return i
//     }
//     return -1
// };


export const GET_SCREEN_INDEX = (screen_name) => {
    if(!screen_name) return -1;

    for(let i = 0; i < TOTAL_SCREENS.length; i++){
        if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
    }

    return -1;
};