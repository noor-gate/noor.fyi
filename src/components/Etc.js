import React from 'react';
import style from './Etc.module.css';

function Etc() {
  return (
    <div className={style.cont}>
      <span>What I'm Doing Now</span>  (<a href="https://nownownow.com/about">inspiration</a>)<br /><br />
      <b>Reading: </b>After Dark by Haruki Murakami
      <b>Watching: </b>How I Met Your Mother (again)
      <b>Enjoying: </b>Soaking up the last of the summer + going climbing + improving my strength
      <b>Creating: </b>Knitted jumper + questionable code
      <b>Current joke: </b>What do you call seagulls that fly too close to the bay? Bagels.
    </div>
  );
}

export default Etc;
