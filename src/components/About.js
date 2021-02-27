import React from 'react';
import style from './About.module.css';

function About() {
  return (
    <div className={style.cont}>
      <span>Hello there, I'm Noor.</span><br /><br />
      
      I'm a second year student at Imperial College London & incoming SWE Intern at Facebook.<br /><br />

      I interned at QinetiQ last year, exploring my interest in cyber security, but I'm hoping to broaden my horizons with something new this year.<br /><br />
      
      Outside of tech, I enjoy reading fiction, watching sunrises, and starting an unreasonable number of craft projects. <br /><br />

      Find me on <a href="https://github.com/noor-gate">Github</a> and <a href="https://www.linkedin.com/in/noor-sawhney-755b1b19a/">LinkedIn</a>, or <a href="mailto:ns1619@ic.ac.uk">email me</a>.
      
    </div>
  );
}

export default About;
