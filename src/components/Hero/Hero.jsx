import React from "react";
import css from "./Hero.module.scss";
import cetificate from "../../imgs/certificate.png";
import person from "../../imgs/person1.png";

const Hero = () => {
  return (
    <section className={css.wrapper}>
      <div className={`innerWidth ${css.container}`}>
        {/* Upper Element */}
        <div className={css.upperElements}>
          <span className="primaryText">
            Hey There, <br /> I'm Chathurka
          </span>
          <span className="secondaryText">I do what I love</span>
        </div>

        {/* Middle Image */}
        <div className={css.prodileImage}>
          <img src={person} width="100%" alt="" />
        </div>

        <div className={css.email}>
          <a href="">chathurkavish@gmail.com</a>
        </div>

        {/* lower Element */}
        <div className={css.lowerElements}>
          <div className={css.experience}>
            <div className="primaryText">10</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </div>
          <div className={css.cettificate}>
            <img src={cetificate} alt="" />
            <span>UI/UX Designer</span>
            <span>Web Developer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
