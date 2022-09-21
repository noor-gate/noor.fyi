import React from 'react';
import style from './Skill.module.css';

function Skill() {
  return (
    <div className={style.cont}>
      <span>Languages & Technologies</span> <br /><br />
      Proficient:
      <ul>
          <li>Java & Kotlin</li>
          <li>Python (+ Django, Flask)</li>
          <li>C</li>
          <li>JS (+ ReactJS, JQuery)</li>
          <li>Tensorflow</li>
          <li>AWS CDK (S3, Lambda, EC2/ASG, SQS)</li>
          <li>Git</li>
          
      </ul>
      Worked with: 
      <ul>
        <li>Swift</li>
        <li>Flutter</li>
        <li>SQL</li>
        <li>Haskell</li>
      </ul>
     
    </div>
  );
}

export default Skill;
