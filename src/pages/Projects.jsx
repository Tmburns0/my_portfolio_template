import { FaGithub } from "react-icons/fa6";
import ProjectOne from "../assets/IT-Members.png"
import ProjectTwo from "../assets/Email-Page.png"
import ProjectThree from "../assets/TODO.png"
import ProjectFour from "../assets/Weather-App.png"
// Replace the projects inside the myProjects array with your own projects. Right now the array has sample data. You can add as many projects as you want. Each project should be an object with the following
// properties:
// - title: The title of the project
// - description: A description of the project
// - repositoryLink: A link to the GitHub repository of the project
// You can also add more properties if you want to display more information about your projects.
const myProjects = [
  {
    title: 'HTML Project: IT Team Members Page',
    description: 'Developed an IT Team Members Page for NPower University, featuring a user-friendly form to add new team members with inputs for first name, last name, role, and email. Implemented a dynamic table to display and manage the team member list.',
    repositoryLink: 'https://github.com/Tmburns0/path2tech_html_assignment.git',
    imgLink: ProjectOne
  },
  {
    title: 'CSS Project: HTML Page with CSS Styling',
    description: 'Designed and implemented a user-friendly email interface featuring a sleek, non-functional sidebar for navigation, a personalized welcome message, and a compose button. Integrated an organized email folder list, a top-positioned search bar, an email list display, and sections for viewing email content and drafting replies. Built with HTML, CSS, and responsive design to ensure accessibility across devices.',
    repositoryLink: 'https://github.com/Tmburns0/Email-Template.git0',
    imgLink: ProjectTwo
  },
  {
    title: 'JavaScript Project: TODO List',
    description: 'Developed a CLI-based TODO list application using JavaScript and Node.js, featuring functionalities to add tasks, remove tasks, mark tasks as complete, and display the total number of tasks for efficient task management.',
    repositoryLink: 'https://github.com/Tmburns0/path2tech_JavascriptProject.git',
    imgLink: ProjectThree
  },
  {
    title: 'React: Weather Project',
    description: 'Created a React weather application that displays default location weather on load, allows users to search for new locations, and dynamically fetches data from an external API, ensuring secure API key handling and modular design.',
    repositoryLink: 'https://github.com/Tmburns0/Weather-App-Template.git',
    imgLink: ProjectFour
  },
  {
    title: 'CAPSTONE Project: Food Ordering Website',
    description: 'Developed a full-stack Food Ordering application as a capstone project using the MERN stack (MongoDB, Express, React, Node.js). Key features include user authentication, profiles, order management, a detail page, Stripe payment integration, and responsive design for seamless user experience.',
    repositoryLink: 'Link to the GitHub repository',
    imgLink: undefined
  },
];
const Projects = () => {
  return (
    <main className="projects-container">
      {myProjects.map((project) => (
        <section key={project.title} className="project-item border border-2 rounded-lg">
          <section className="project-image-container">
            { project.imgLink !== undefined ? <img src={project.imgLink} alt="project img"/>:<FaGithub /> }
          </section>
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-lg">{project.description}</p>
          <p>Check out the link to the project repository <a href={project.repositoryLink} target="_blank">Here</a> </p>

        </section>
      ))}
    </main>
  )
}

export default Projects