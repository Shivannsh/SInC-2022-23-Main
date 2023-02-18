import React, { useState } from "react";
import "./expoMain.css";
import bullet from "./timeline-bullet.svg";
import line from "./timeline-bullet-connector.svg";

function ExpoMain() {
  const [aboutCollapse, setAboutCollapse] = useState(window.innerWidth > 768);
  return (
    <div className="expoMain">
      <div className="expoNav d-flex justify-content-around py-4 mt-5 sticky-top">
        <a style={{ color: "#FFFFFF" }} href="#about" className="expoNavItem">
          About
        </a>
        <a
          style={{ color: "#FFFFFF" }}
          href="#timeline"
          className="expoNavItem"
        >
          Timeline
        </a>
        <a
          style={{ color: "#FFFFFF" }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSez-YsCr_enwpAxf88qvncAKqWr0nhQFGVdMi9vI4m378OWHA/viewform"
          className="expoNavItem"
        >
          Register
        </a>
      </div>
      <div className="expoAbout m-4 py-4 px-lg-5 text-center" id="about">
        <div className="expoAboutTitle pt-sm-4">
          Welcome to the Startup Expo!
        </div>
        <div className="expoAboutText px-sm-5 py-3">
          This event is designed to bring together entrepreneurs, investors, and
          innovators from around India to share ideas, network, and explore new
          opportunities. Here you will find a wide range of exhibitors
          showcasing their products and services, as well as inspiring talks
          from industry leaders.{" "}
          {aboutCollapse ? (
            <span>
              Startup Expo is a great venue for companies in the seed funding or
              early stage of development to showcase their products and attract
              potential business partners and investors. We plan to install
              kiosks for start-ups in various industries/sectors, allowing them
              to exhibit their start-ups and products and thereby increase their
              exposure. We are excited to see the incredible ideas and products
              that will be presented at this event. We are delighted to welcome
              you to this celebration of creativity and innovation.
            </span>
          ) : null}
          {window.innerWidth > 768 ? null : (
            <div
              className="expoAboutTextReadMore"
              onClick={() => setAboutCollapse(!aboutCollapse)}
            >
              Read {aboutCollapse ? "less" : "more"}
            </div>
          )}
        </div>
      </div>
      <div className="expoTimeline" id="timeline">
        <div className="expoTimelineTitle">
          <img src={bullet} alt="bullet" />
          ROUND 1
        </div>
        <div className="expoTimelineText">
          <img src={line} alt="line" />
          The top 100 startups will be chosen for the second round based on
          their pitch deck, which they would have to submit along with the
          registration link
        </div>
        <div className="expoTimelineTitle">
          <img src={bullet} alt="bullet" />
          ROUND 2
        </div>
        <div className="expoTimelineText">
          <img src={line} alt="line" />
          Top 20 Participants will be selected for the final pitching round (10
          in each category)
        </div>
        <div className="expoTimelineTitle">
          <img src={bullet} alt="bullet" />
          ROUND 3
        </div>
        <div className="expoTimelineText">
          <img src={line} alt="line" />
          The shortlisted startups would have an opportunity to pitch in front
          of a panel composed of venture capitalists and other dignitaries to
          secure a chance of a mentoring opportunity and get funding. Each
          startup will have up to 8 minutes to present its pitch, and then the
          judges will have another 7 minutes to ask questions. Startups must
          send in their presentation slides and any other materials at least 48
          hours before the event.
        </div>
        <div className="expoTimelineTitle">
          <img src={bullet} alt="bullet" />
          <span className="vis-none">I</span>
        </div>
      </div>
      <div className="expoTimeline">
        <div className="expoTimelineTitle">
          <img src={bullet} alt="bullet" />
          Eligibility
        </div>
        <div className="expoTimelineText">
          <img src={line} alt="line" />
          <li>Startups should be registered, with their active websites.</li>
          <li>
            Startups should be bootstrapped or Seed funded or on
            incubation/pre-incubation stage. But don't worry and feel free to
            contact the organizers in any other case as well.
          </li>
          <li>Startups should be actively generating revenue for 1-2 years.</li>
        </div>
        <div className="expoTimelineTitle">
          <img src={bullet} alt="bullet" />
          Rules and Regulations
        </div>
        <div className="expoTimelineText">
          <img src={line} alt="line" />
          <li>
            After the reviewing and selection process, selected startups will be
            notified through email or call.
          </li>
          <li>
            After selection, startups are required to send a confirmation email
            to SInC IITD at{" "}
            <a href="mailto:sinc.iitd@gmail.com" style={{ color: "#FFFFFF" }}>
              sinc.iitd@gmail.com
            </a>{" "}
            to confirm their participation.
          </li>
          <li>
            A unique slot number will be allotted to all the selected startups,
            along with a point of contact from the SInC team.
          </li>
          <li>
            Each startup should be ready to present at their assigned time; any
            delay in presenting will be considered part of the 15 minutes.
            Startups should be present in the event room at least 15 minutes
            before their assigned time.
          </li>
          <li>
            The Q&A session will start immediately after the presentation; any
            remaining time from the 15 minutes will not be added to the Q&A
            session.
          </li>
          <li>
            If a contestant is found to have presented false or incomplete
            information during the due diligence process, investors have the
            right to cancel or alter the deal. This is because the due diligence
            process is designed to uncover any potential issues or risks
            associated with the investment opportunity, and if the contestant
            has deliberately hidden information or presented false data, it
            undermines the integrity of the due diligence process and the
            investors' ability to make a fully informed decision about the
            investment.
          </li>
          <li>
            Both parties are free to negotiate and reach an agreement within a
            month.
          </li>
          <li>
            In the event of a conflict or dispute between the sharks and the
            contestants, the final decision will be of the organizing committee.
          </li>
        </div>
        <div className="expoTimelineTitle">
          <img src={bullet} alt="bullet" />
          <span className="vis-none">I</span>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSez-YsCr_enwpAxf88qvncAKqWr0nhQFGVdMi9vI4m378OWHA/viewform"
          className="expoRegisterBtn px-3"
        >
          <span className="expoRegisterBtnText">REGISTER</span>
        </a>
      </div>
    </div>
  );
}

export default ExpoMain;
