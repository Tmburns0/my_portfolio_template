import { NavLink } from "react-router-dom";
import CodeImage from '../assets/black-abstract1.jpg';

const fullName = 'Tandrea Burns';
const personalQuote =
  'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.';
const professionalSummary =
  'IT Professional with extensive experience in data analysis, investigative analysis, and complex claims management. Skilled in predictive modeling, data visualization, and effective customer service, with a strong focus on collaboration and on-time issue resolution. Proficient in strategic planning and relationship-building with both internal and external stakeholders. Recognized for driving efficiency, compliance, and achieving successful outcomes in dynamic team environments.';

const Home = () => {
  return (
    <main className="home-container">
      <section className="home-hero home-subsection">
        <h2 className="text-4xl mb-2">Hi, I am {fullName}</h2>
        <p className="subsection-paragraph">{personalQuote}</p>
        <NavLink to="/contact">
          Contact Me
        </NavLink>
        <img className="hero-background" src={CodeImage} alt="code hero image" />
      </section>
      <section className="overview home-subsection">
        <h3 className="subsection-intro-header">Introduction</h3>
        <h2 className="subsection-big-header">Overview.</h2>
        <p className="subsection-paragraph">{professionalSummary}</p>
        <NavLink to="/about">
          Learn More About Me
        </NavLink>
      </section>
      <section className="projects home-subsection">
        <h3 className="subsection-intro-header">My Works</h3>
        <h2 className="subsection-big-header">Projects.</h2>
        <p className="subsection-paragraph">
          I have worked on multiple projects. The projects I have worked on demonstrate my skills and experience through real-life examples of my work. Each project is briefly described and includes links to code repositories that showcase my ability to tackle challenging problems. If you are interested in my work, click on the link below to go to the project page.
        </p>
        <NavLink to="/projects">
          View Projects
        </NavLink>
      </section>
    </main>
  )
}

export default Home;
