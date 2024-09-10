import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.scss";
import { faBars, faClipboardList, faEnvelope, faFile, faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
   return (
      <nav>
         <h1>Alex Wilson</h1>
         <label htmlFor="check">
            <FontAwesomeIcon icon={faBars} />
         </label>
         <input type="checkbox" id="check"></input>
         <ul>
            <li>
               <FontAwesomeIcon icon={faHouse} />
               <p>Home</p>
            </li>
            <li>
               <FontAwesomeIcon icon={faFile} />
               <p>Resume</p>
            </li>
            <li>
               <FontAwesomeIcon icon={faClipboardList} />
               <p>Artifacts</p>
            </li>
            <li>
               <FontAwesomeIcon icon={faEnvelope} />
               <p>Contact</p>
            </li>
         </ul>
      </nav>
   )
}