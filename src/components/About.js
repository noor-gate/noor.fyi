import React from 'react';
import style from './About.module.css';

function About() {
  return (
    <div className={style.cont}>
      <span>Hello there, I'm Noor.</span><br /><br />
      
      I've just finished an internship at QinetiQ and am about to start my second year studying Computing at Imperial College London.<br /><br />

      I'm interested in frontend web developement and cyber security. Unsure exactly what I want to do in the future, but currently furthering my skills in both areas.<br /><br />
      
      Outside of tech, I enjoy reading contemporary fiction, contemplating my existence, and running by the river. <br /><br />

      Find me on <a href="https://github.com/noor-gate">Github</a> and <a href="https://www.linkedin.com/in/noor-sawhney-755b1b19a/">LinkedIn</a>, or <a href="mailto:ns1619@ic.ac.uk">email me</a>.
      
    </div>
  );
}

export default About;
