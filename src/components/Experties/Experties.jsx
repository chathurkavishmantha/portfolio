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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos error
            ipsum, quo mollitia magnam quam vel! Asperiores ullam nobis, iusto
            sapiente aut itaque laudantium iure eveniet vitae! Labore, mollitia
            amet?</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos error
            ipsum, </p>

            
          </div>

          <div className={css.numberContainer}>
            <div className={css.number}>
              <div className="primaryText">285</div>
              <div>Project Completed</div>
            </div>
            <div className={css.number}>
              <div className="primaryText">285</div>
              <div>Project Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experties;
