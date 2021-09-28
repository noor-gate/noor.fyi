import React from 'react';
import style from './About.module.css';

function About() {
  return (
    <div className={style.cont}>
      <span>Hello there, I'm Noor.</span><br /><br />
      
      I'm a third year Computing student at Imperial College London & former SWE Intern at Facebook.<br /><br />

      I'm interested in cyber security, climate tech and anything postive impact<br /><br />
      
      Outside of tech, I enjoy reading fiction, watching sunrises, and starting an unreasonable number of craft projects. <br /><br />

      Find me on <a href="https://github.com/noor-gate">Github</a> and <a href="https://www.linkedin.com/in/noor-sawhney-755b1b19a/">LinkedIn</a>, or <a href="mailto:ns1619@ic.ac.uk">email me</a>.
      
    </div>
  );
}

export default About;
