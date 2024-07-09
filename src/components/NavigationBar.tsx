import React, { useEffect } from "react";
import { Link } from "react-scroll";
import "./NavigationBar.css";
import SkillPill from "./utils/SkillPill";

const NavigationBar: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          const navLink = document.querySelector(
            `.navigation-bar a[href="#${id}"]`
          );

          if (entry.isIntersecting) {
            navLink?.classList.add("active");
          } else {
            navLink?.classList.remove("active");
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollSpy = true;
  const scrollSmooth = false;
  const scrollDuration = 100;

  return (
    <nav className="navigation-bar">
      <ul>
        <li>
          <Link
            to="overview"
            spy={scrollSpy}
            smooth={scrollSmooth}
            duration={scrollDuration}
          >
            overview
          </Link>
        </li>
        <li>
          <Link
            to="education"
            spy={scrollSpy}
            smooth={scrollSmooth}
            duration={scrollDuration}
          >
            education
          </Link>
        </li>
        <li>
          <Link
            to="work_experience"
            spy={scrollSpy}
            smooth={scrollSmooth}
            duration={scrollDuration}
          >
            work_experience
          </Link>
        </li>
        <li>
          <Link
            to="activities"
            spy={scrollSpy}
            smooth={scrollSmooth}
            duration={scrollDuration}
          >
            activities
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            spy={scrollSpy}
            smooth={scrollSmooth}
            duration={scrollDuration}
          >
            skills
          </Link>
        </li>
        <div className="unavailable-section">
          <div className="unavailable-section-title">chat</div>
          <SkillPill text="soon" colour="#FF5353" />
        </div>
      </ul>
    </nav>
  );
};

export default NavigationBar;
