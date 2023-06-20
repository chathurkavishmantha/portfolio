import css from "../Experties/Experties.module.scss";
import { BiLineChart,BiDesktop, BiPencil } from "react-icons/bi";

const Experties = () => {
  return (
    <section className={`innerWidth ${css.wrapper}`}>
      <div className={`paddings ${css.container}`}>
        <div className={css.projects}>
          <div className={css.cards}>
            <div className={css.icons}>
              <BiPencil size={40} />
            </div>
            <div className={css.iconsDetailsContainer}>
            <div className="primary">Frontend Design</div>
            <div className="secondary">5 projects</div>
            </div>
          </div>
          <div className={css.cards}>
            <div className={css.icons}>
              <BiDesktop  size={40} />
            </div>
            <div className={css.iconsDetailsContainer}>
            <div className="primary">Web Development</div>
            <div className="secondary">5 projects</div>
          </div>
          </div>
          <div className={css.cards}>
            <div className={css.icons}>
              <BiLineChart size={40}  />
            </div>
            <div className={css.iconsDetailsContainer}>
            <div className="primary">SEO Development</div>
            <div className="secondary">2 projects</div>
          </div>
          </div>
        </div>
        <div className={css.info}>
          <div className="primaryText" style={{textAlign:"center"}}>How can I help?</div>
          <div className={css.description}>
            <p>I'm a front-end and Web developer based in Colombo, Sri Lanka. I have developed and maintained many types of front-ends from well know Bootstrap, ReactJs Ecommerce like Magento, Drupal, WordPress applications and systems.</p>

            <p>I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX. </p>

            
          </div>

          <div className={css.numberContainer}>
            <div className={css.number}>
              <div className="primaryText">12</div>
              <div>Project Completed</div>
            </div>
            <div className={css.number}>
              <div className="primaryText">8</div>
              <div>Happy CLients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experties;
