import React from 'react';
import style from './Skill.module.css';

function Skill() {
  return (
    <div className={style.cont}>
      <span>Languages & Technologies</span> <br /><br />
      Proficient: 
      <ul>
          <li>Java</li>
          <li>C</li>
          <li>Python</li>
          <li>Haskell</li>
      </ul>
      Worked with:  
      <ul>
          <li>Git</li>
          <li>Django</li>
          <li>SQL</li>
          <li>JS (React, JQuery)</li>
          <li>HTML/CSS</li>
      </ul>  
        
    </div>
  );
}

export default Skill;
