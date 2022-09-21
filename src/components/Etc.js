import React from 'react';
import style from './Etc.module.css';

function Etc() {
  return (
    <div className={style.cont}>
      <span>What I'm Doing Now</span>  (<a href="https://nownownow.com/about">credit</a>)<br /><br />
      <ul>
      <li><b>Reading: </b> Mrs Dalloway by Virginia Woolf</li>
      <li><b>Watching: </b>Any trashy reality show that Netflix releases</li>
      <li><b>Enjoying: </b>LEGO Harry Potter on Nintendo Switch</li>
      <li><b>Creating: </b> Knitted pullover and illustrations on Procreate</li>
      <li><b>Improving: </b> Squat PB and climbing grade</li>
      <li><b>Ruminating upon: </b>Sustainable fashion</li>
      <li><b>Current joke: </b>What do you call seagulls that fly too close to the bay? Bagels.</li>
      </ul>
    </div>
  );
}

export default Etc;
