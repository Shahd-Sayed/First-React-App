import image from "../assets/Group (2).svg";
import "../Layouts/Maincontent.css";

export default function MainContent() {
  return (
    <div className="container main">
      <h2>Fun facts about React</h2>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <div className="img">
        <img src={image} alt="image" />
      </div>
    </div>
  );
}
