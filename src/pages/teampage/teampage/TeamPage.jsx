import React from "react";
import "./TeamPage.css";
import Card from "./Card";
import Exe from "./Exe";
import bar from "./bar.svg";
import barMobile from "./bar_mobile.svg";

// Images
import oc from "../assets/oc/oc.jpg";
import ctm1 from "../assets/ctm/ctm-amit-kumar.jpg";
import ctm2 from "../assets/ctm/ctm-rahul-chhabra.jpeg";
import coordiTech1 from "../assets/technical/coordi-satyapragnya.jpg";
import coordiTech2 from "../assets/technical/coordi-shivansh.jpeg";
import coordiTech3 from "../assets/technical/coordi-gautam.jpeg";
import exeTech2 from "../assets/technical/exe-gopal.jpg";
import exeTech3 from "../assets/technical/exe-jaskaran.jpg";
import exeTech4 from "../assets/technical/exe-nancy.jpg";
import exeTech5 from "../assets/technical/exe-vatsal.jpg";
import coordiCr1 from "../assets/cr/coordi-aryan.jpg";
// import coordiCr2 from "../assets/cr/coordi-hriday.jpeg";
import coordiCr3 from "../assets/cr/coordi-rohit.jpg";
import coordiCr4 from "../assets/cr/coordi-vidhi.jpg";
import exeCr1 from "../assets/cr/exe-akshay.jpg";
import exeCr2 from "../assets/cr/exe-chandan.jpg";
import exeCr3 from "../assets/cr/exe-krishna.jpg";
import exeCr4 from "../assets/cr/exe-vansh.jpg";
import exeCr5 from "../assets/cr/exe-yash.jpeg";
import exeCr6 from "../assets/cr/exe-sudhanshu.jpeg";
import exeCr7 from "../assets/cr/exe-abhas.jpg";
import CoordiDesign1 from "../assets/design/coordi-avanti.jpg";
import CoordiDesign2 from "../assets/design/coordi-soumya.jpeg";
// import CoordiDesign3 from "../assets/design/coordi-velugonda.jpg";
import exeDesign1 from "../assets/design/exe-parth.jpg";
import exeDesign2 from "../assets/design/exe-anshu.jpg";
import exeDesign3 from "../assets/design/exe-anushka.jpg";
import CoordiEvents1 from "../assets/events/coordi-lakshya.jpg";
import CoordiEvents2 from "../assets/events/coordi-lakshya-chaudhary.jpg";
// import CoordiEvents3 from "../assets/events/coordi-shlokh.jpg";
import exeEvents1 from "../assets/events/exe-eshita.jpg";
import exeEvents2 from "../assets/events/exe-sanchit.jpg";
import exeEvents3 from "../assets/events/exe-tanishq.jpg";
import exeEvents4 from "../assets/events/exe-chinmay.jpg";
import CoordiKO1 from "../assets/ko/coordi-pratik.jpg";
import CoordiKO2 from "../assets/ko/coordi-prajwal.jpg";
// import CoordiKO3 from "../assets/ko/coordi-yashika.jpg";
import exeKO1 from "../assets/ko/exe-ayush.jpg";
import exeKO2 from "../assets/ko/exe-chaitanay.jpg";
import exeKO3 from "../assets/ko/exe-kahlan.jpg";
import exeKO4 from "../assets/ko/exe-priyash.jpg";
import exeKO5 from "../assets/ko/exe-shikhar.jpg";
import exeKO6 from "../assets/ko/exe-yogita.jpg";
import exeKO7 from "../assets/ko/exe-aksh.jpg";
import AboutUs from "../about-us/AboutUs";

const TeamPage = () => {
  return (
    <div>
      <AboutUs />
      <div className="teamPageBase">
        <div className="teamHeading">TEAM</div>
        <img className="bar" src={bar} alt="bar" />
        <img className="bar-mobile" src={barMobile} alt="bar-mobile" />
        <div className="teamsHeading">Core Team</div>
        <div className="div-Coordi">
          <Card name="Madhav Malani" position="Overall Coordinator" img={oc} />
          <Card name="Amit Kumar" position="Core Member" img={ctm1} />
          <Card name="Rahul Chhabra" position="Core Member" img={ctm2} />
        </div>

        <div className="teamsHeading">Technical & UI/UX</div>
        <div className="div-section">
          <div className="div-Coordi">
            <Card
              name="Satyapragnya"
              position="Coordinator"
              img={coordiTech1}
            />
            <Card name="Shivansh" position="Coordinator" img={coordiTech2} />
            <Card name="Gautam" position="Coordinator" img={coordiTech3} />
          </div>
          <div className="div-exe">
            <Exe name="Vatsal" img={exeTech5} />
            <Exe name="Jaskaran" img={exeTech3} />
            <Exe name="Gopal" img={exeTech2} />
            <Exe name="Nancy" img={exeTech4} />
          </div>
        </div>

        <div className="teamsHeading">Corporate & Alumni Relation</div>
        <div className="div-section">
          <div className="div-Coordi">
            <Card name="Aryan" position="Coordinator" img={coordiCr1} />
            {/* <Card name="Hriday" position="Coordinator" img={coordiCr2} /> */}
            <Card name="Rohit" position="Coordinator" img={coordiCr3} />
            <Card name="Vidhi" position="Coordinator" img={coordiCr4} />
          </div>
          <div className="div-exe">
            <Exe name="Akshay" img={exeCr1} />
            <Exe name="Chandan" img={exeCr2} />
            <Exe name="Krishna" img={exeCr3} />
            <Exe name="Vansh" img={exeCr4} />
            <Exe name="Yash" img={exeCr5} />
            <Exe name="Sudhanshu" img={exeCr6} />
            <Exe name="Abhas" img={exeCr7} />
          </div>
        </div>

        <div className="teamsHeading">Design and Creative</div>
        <div className="div-section">
          <div className="div-Coordi">
            <Card name="Avanti" position="Coordinator" img={CoordiDesign1} />
            <Card name="Soumya" position="Coordinator" img={CoordiDesign2} />
            {/* <Card name="Velugonda" position="Coordinator" img={CoordiDesign3} /> */}
          </div>
          <div className="div-exe">
            <Exe name="Parth" img={exeDesign1} />
            <Exe name="Anshu" img={exeDesign2} />
            <Exe name="Anushka" img={exeDesign3} />
          </div>
        </div>

        <div className="teamsHeading">Events & Administration</div>
        <div className="div-section">
          <div className="div-Coordi">
            <Card
              name="Lakshya G."
              position="Coordinator"
              img={CoordiEvents1}
            />
            <Card
              name="Lakshya C."
              position="Coordinator"
              img={CoordiEvents2}
            />
            {/* <Card name="Shlok" position="Coordinator" img={CoordiEvents3} /> */}
          </div>
          <div className="div-exe">
            <Exe name="Eshita" img={exeEvents1} />
            <Exe name="Sanchit" img={exeEvents2} />
            <Exe name="Tanishq" img={exeEvents3} />
            <Exe name="Chinmay" img={exeEvents4} />
          </div>
        </div>

        <div className="teamsHeading">Knowledge & Outreach</div>
        <div className="div-section">
          <div className="div-Coordi">
            <Card name="Pratik" position="Coordinator" img={CoordiKO1} />
            <Card name="Prajwal" position="Coordinator" img={CoordiKO2} />
            {/* <Card name="Yashika" position="Coordinator" img={CoordiKO3} /> */}
            <Card name="Chaitanay" position="Coordinator" img={exeKO2} />
          </div>
          <div className="div-exe">
            <Exe name="Ayush" img={exeKO1} />
            <Exe name="Kahlan" img={exeKO3} />
            <Exe name="Priyash" img={exeKO4} />
            <Exe name="Shikhar" img={exeKO5} />
            <Exe name="Yogita" img={exeKO6} />
            <Exe name="Aksh" img={exeKO7} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
