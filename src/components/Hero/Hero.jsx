import React from "react";
import css from "./Hero.module.scss";
import person from "../../imgs/person4.png";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

const Hero = () => {
  return (
    <section className={css.wrapper}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className={`innerWidth ${css.container}`}
      >
        {/* Upper Element */}
        <div className={css.upperElements}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            Hey There, <br /> I'm Chathurka
          </motion.span>
          <motion.span variants={fadeIn("left", "tween", 0.2, 1)} className="secondaryText">I do what I love</motion.span>
        </div>

        {/* Middle Image */}
        <div
          initial="hidden"
          whileInView="show"
          variants={slideIn("up", "tween", 0.1, 1.9)}
          className={` ${css.prodileImage}`}
        >
          <img src={person} width="100%" alt="" />
          {/* <div className={css.prodileImage}>
          <img src={person} width="100%" alt="" />
        </div> */}
        </div>

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
      </motion.div>
    </section>
  );
};

export default Hero;
