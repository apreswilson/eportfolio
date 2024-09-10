import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.scss";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
   return (
      <footer>
         <div className="grid-section name-details">
            <h1>Alex Wilson</h1>
            <h1>Clearwater, FL</h1>
         </div>
         <div className="grid-section pages">
            <h1>About Me</h1>
            <ul>
               <li>Home</li>
               <li>Resume</li>
               <li>Artifacts</li>
               <li>Contact</li>
            </ul>
         </div>
         <div className="grid-section socials">
            <h1>Connect</h1>
            <div className="social-links">
               <a href="https://usf.joinhandshake.com/profiles/45453850">
                  <FontAwesomeIcon icon={faHandshake} />
               </a>
               <a href="https://www.linkedin.com/in/alex-wilson-033831268/">
                  <FontAwesomeIcon icon={faLinkedin} />
               </a>
               <a href="https://github.com/apreswilson">
                  <FontAwesomeIcon icon={faGithub} />
               </a>
            </div>
         </div>
      </footer>
   )
}