import React, { useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { headerVariants, getMenuStyles } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerShadow = useHeaderShadow()
  
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.1 }}
      className={` ${css.wrapper}`}
      style={{boxShadow: headerShadow}}

    >
      <div className={`paddings ${css.wrapper}`}>
        <div className={`flexCenter innerWidth ${css.container}`}>
          <div className={css.name}>Chathurka</div>

          {/* Menu Items */}
          <ul
            className={`flexCenter ${css.menu}`}
            style={getMenuStyles(menuOpen)}
          >
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Experience</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li className={`flexCenter ${css.phone}`}>
              <p>+94 075 3357875</p>
              <BiPhoneCall size={"40px"} />
            </li>
          </ul>

          {/* menu Icon */}
          <div
            className={css.menuIcon}
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <BiMenuAltRight size={30} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
