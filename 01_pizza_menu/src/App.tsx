import React from "react";
import logo from "/logo.svg";
import "./App.css";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avtar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avtar() {
  return <img className="avatar" src="person.jpg" alt="Jonas Schmedtmann" />;
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

type Props = {
  skill: string;
  emoji: string;
  color: string;
};

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Svelte" emoji="👶" color="orangered" />
    </div>
  );
}

function Skill({ skill, emoji, color }: Props) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  );
}

export default App;
