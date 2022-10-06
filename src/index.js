import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Hi() {
  return (
    <div className="mainDiv">
      <center>Resume</center>
      <img
        className="pic"
        src="https://avatars.githubusercontent.com/u/76055167?s=400&u=323d4a4345e925476e90b7ccb2dfa5f062be947e&v=4"
        alt="img"
      />
      <div>
        <h3>PERSONAL INFORMATION</h3>
        <hr />
      </div>
      <div>
        <p>Muhammad Usman Naeem</p>
        <p>gulshan e iqbal, karachi, sindh, Pakistan</p>
        <p>03313565162</p>
        <p>usmannaeem@gmail.com</p>
        <hr />
      </div>
      <div>
        <h3>EDUCATION</h3>
        <hr />
        <li>Matric from Chiniot islamia public school</li>
        <li>Intermediate from DJ science college</li>
        <li>
          <b>Undergraduating</b>
          <br />
          B.E from Dawood University of Engineering & Technology
        </li>
        <hr />
      </div>

      <div>
        <h3>SKILLS</h3>
        <hr />
        <li>WEB DESIGNER & DEVELOPER</li>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>React (begineer)</li>
        <br />
      </div>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector("#root"));