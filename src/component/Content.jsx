import React from "react";
import "./style.css";
import ceremony from "../assets/2.png";
import award from "../assets/1.png";

const Content = () => {
  return (
    <div className="content-container">
      <div className="column">
        <img className="award-img" src={award} alt="" />
      </div>
      <div className="column">
        <h3 className="te-ali-left fnt-siz-med">
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </h3>
        <ul>
          <li className="te-ali-left fnt-siz-sml">
            C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li className="te-ali-left fnt-siz-sml">
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.
          </li>
        </ul>
        <img className="ceremony-img" src={ceremony} alt="ceremony-img" />
        <p className="te-ali-left">
          Government of India has awarded the{" "}
          <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
          Joint Managing Director of C.R.I. Group received the award from Smt.
          Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
          Honorable Minister of State.
        </p>
      </div>
    </div>
  );
};

export default Content;
