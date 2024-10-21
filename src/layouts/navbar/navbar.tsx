import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClipboardList, faEnvelope, faFile, faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {

   const navigate = useNavigate();

   return (
      <nav>
         <h1>Alex Wilson</h1>
         <label htmlFor="check">
            <FontAwesomeIcon icon={faBars} />
         </label>
         <input type="checkbox" id="check"></input>
         <ul>
            <li onClick={() => navigate("/")}>
               <FontAwesomeIcon icon={faHouse} />
               <p>Home</p>
            </li>
            <li>
               <a href="https://drive.google.com/file/d/1YfTX3Kr3tJVIO1BV4UiDRIT2UwBeL1UT/view?usp=sharing">
                  <FontAwesomeIcon icon={faFile} />
                  <p>Resume</p>
               </a>
            </li>
            <li onClick={() => navigate("/artifacts")}>
               <FontAwesomeIcon icon={faClipboardList} />
               <p>Artifacts</p>
            </li>
            <li onClick={() => navigate("/")}>
               <FontAwesomeIcon icon={faEnvelope} />
               <p>Contact</p>
            </li>
         </ul>
      </nav>
   )
}