
import Experties from "./components/Experties/Experties";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Work from "./components/Work/Work";
import css from "./styles/app.module.scss"

function App() {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Experties />
      <Work />
    </div>
  );
}

export default App;
