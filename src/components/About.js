import React from 'react';
import style from './About.module.css';

function About() {
  return (
    <div className={style.cont}>
      <span>Hello there, I'm Noor.</span><br /><br />
      
      I'm a fourth year Computing student at Imperial College London & former intern at Humanising Autonomy, Meta and QinetiQ.<br /><br />

      This is my website. It has the main purpose of letting me play around with cool frameworks, with the side effect of showcasing my ✨ marketable skills ✨. <br /><br />
      
      Outside of tech, I am an enthusiastic <a href="https://www.ravelry.com/people/noorkward">knitter</a>, <a href="https://app.thestorygraph.com/profile/noorkward">reader</a> and bad joke teller, among other things<br /><br />

      Find me on <a href="https://github.com/noor-gate">Github</a> and <a href="https://www.linkedin.com/in/noor-sawhney-755b1b19a/">LinkedIn</a>, or <a href="mailto:ns1619@ic.ac.uk">email me</a>.
      
    </div>
  );
}

export default About;
