import React from "react";
import css from "./Hero.module.scss";
import cetificate from "../../imgs/certificate.png";
import person from "../../imgs/person4.png";
import { motion } from "framer-motion";

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
        <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={` ${css.prodileImage}`}

    ><img src={person} width="100%" alt="" />
        {/* <div className={css.prodileImage}>
          <img src={person} width="100%" alt="" />
        </div> */}
        </motion.div>

        <div className={`secondaryText ${css.email}`}>
          <a href="">chathurkavish@gmail.com</a>
        </div>

        {/* lower Element */}
        <div className={css.lowerElements}>
          <div className={css.experience}>
            <div className="primaryText">2</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </div>
          <div className={css.cettificate}>
            {/* <img src={cetificate} alt="" /> */}
            <div className="secondaryText">UI/UX Designer</div>
            <div className="secondaryText">Frontend Developer</div>
            <div className="secondaryText">Web Developer</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
