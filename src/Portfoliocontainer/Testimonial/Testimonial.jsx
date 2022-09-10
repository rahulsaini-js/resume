import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"TESTIMONIAL"}
        subHeading={"WHAT PEOPLE THINK ABOUT ME"}
      />
      <section className="project-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="project-carousel"
              {...options}


            >

              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-desc">
                    <p>
                      <i className="fa fa-quote-left" />
                      Rahul is very good friend of mine. Whenever i found some difficulty in understanding coding, he always helped me. He is not only intellegent but also have creative ideas about how to make website more attractive.😁😁
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="project-info">
                    <h5>Kishu saini </h5>
                    <p>My Classmate</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-desc">
                    <p>
                      <i className="fa fa-quote-left" />
                      I admire Rahul for being compassionate with what he is doing. He's dedication for his work are extra amazing! Wherein he dedicated his time, effort and heart in every project he planned, implemented and develop.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="project-info">
                    <h5>Nikka Aaron</h5>
                    <p>JHS Teacher</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-desc">
                    <p>
                      <i className="fa fa-quote-left" />
                      I am much impressed by his dedication and zeal towards the work. He is very good as a person.
                      The way he helped others is also appreciative
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="project-info">
                    <h5>Jasdev Singh</h5>
                    <p>Classmate</p>
                  </div>
                </div>
              </div>



            </OwlCarousel>
          </div>
        </div>
      </section>

    </div>
  );
}