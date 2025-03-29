import { FaDownload } from "react-icons/fa";
import ResumePDF from "../assets/TandreaB-Resume.pdf";

const DownloadResume = () => {
  return (
    // Replace the href with the a link to your resume and replace the download attribute with your name
    <a href={ResumePDF} download="Tandrea-Burns-Resume.pdf" className="flex items-center">
      <p className="mr-2">Download Resume</p>
      <FaDownload />
    </a>
  )
}

export default DownloadResume