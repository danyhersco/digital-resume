import React from "react";
import "./Overview.css";
import SkillPill from "../utils/SkillPill";

const calculateAge = (birthdate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  const m = today.getMonth() - birthdate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }
  return age;
};

const Overview: React.FC = () => {
  const birthdate = new Date(2001, 3, 28); // Month is 0-indexed (yes.)

  return (
    <div className="overview-section">
      <div className="overview-zone">
        <h1 className="overview-h1">Overview</h1>
        <p className="overview-p">
          Hello! I'm Dany, welcome to my digital resume. A little bit about
          myself: I am {calculateAge(birthdate)} years old and I'm from Belgium.
          After spending the first 18 years of my life there, I moved to London
          to pursue my undergraduate studies in Management at the London School
          of Economics. During my degree, I developed a passion for technology
          and its startup ecosystem. My fascination for this industry took its
          source in the startup incubator I ran with a group of friends,
          Initiator VC, bringing together students around the world. This
          experience enabled me to find my career objective: I want to become a
          successful tech leader and entrepreneur.
          <br />
          <br />
          After graduating, I started teaching myself how to code, and soon
          after, I dove deeper into this world by completing a Data Science
          bootcamp at Le Wagon. Now, I'm an AI Research Engineer and Software
          Developer at Xapien, where I am gaining practical technical
          experience, surrounded by industry professionals. This experience also
          enables me to witness how a fast-growing technology startup is being
          managed. In September, I will be joining Imperial College for my
          Master's degree in Applied Computational Science and Engineering!
          <br />
          <br />
          My journey from management to tech showcases my adaptability,
          eagerness to learn, and motivation to reach my career goals. Excited
          for what's next!
        </p>
        <div>
          <button disabled className="overview-button">chat_with_me</button>
          <SkillPill text="soon" colour="#FF5353" />
        </div>
      </div>
    </div>
  );
};

export default Overview;
