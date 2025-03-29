import { NavLink } from 'react-router-dom';
import PlaceholderImage from '../assets/me.jpg';

// Replace these variables with your information
const firstName = 'Tandrea';
const jobTitle = 'IT Professional';
const company = 'Nissan Motor Acceptance Corporation';
const mainDuty = 'leading financial recovery initiatives to secure funds from dealerships and providers, ensuring accuracy, compliance, and efficiency in mitigating revenue losses.';
const jobLocation = 'Dallas, TX';
const briefJobDescription = 'Managed financial recovery efforts for NMAC, reclaiming significant revenue through technical chargebacks, dealership collaboration, and precise refund estimations, while improving operational efficiency and compliance.';
const careerObjective = 'Transitioning from finance to the tech industry with a focus on advancing skills in software development. Building expertise in HTML, CSS, JavaScript, Node.js, Express, MongoDB, and React to create efficient, user-centered applications, while leveraging analytical and problem-solving strengths developed in finance.';
const personalLife = '"In my free time, I enjoy relaxing by playing The Sims. It’s a fun way to unwind and spark creativity.';

const About = () => {
  return (
    <main className="about-container">
      <section className='about-content-container'>
        <section className='image-container'>
          <img className='headshot' src={PlaceholderImage} alt="placeholder professional headshot" />
        </section>
        <section className='description-container'>
          <h2 className='text-xl font-medium'>I&apos;m {firstName}, a {jobTitle} working for, {company} on {mainDuty} located in, {jobLocation}</h2>
          <p>{briefJobDescription}</p>
          <p>{careerObjective}</p>
          <p>{personalLife}</p>
          <p className='mb-4'>If you are interested in my work, reach out to me!</p>
          <NavLink to="/contact" className="contact-me-btn">Contact Me</NavLink>
        </section>
      </section>
    </main>
  )
}

export default About;

