import React from 'react';
import style from './About.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'

function About() {
  return (
    <div className={style.cont}>
      <Row>
        <div className={style.intro}>
        <div className={style.about}>

        <div className={style.linenumbers}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
            <div>16</div>
            <div>17</div>
            <div>18</div>
            <div>19</div>
          </div>
        


          <p>
          <span className={style.pub}>public class</span> <span className={style.word}>aboutMe</span> {"{"}<br /><br />
            <div className={style.indent}>
            <span className={style.comment}>// Profile</span><br />
            <span className={style.prim}>String</span> <span className={style.word}>name</span> = <span className={style.sec}>"Noor Sawhney"</span><br />
            <span className={style.prim}>String</span> <span className={style.word}>occupation</span> = <span className={style.sec}>"Computing MEng student at Imperial College London"</span><br />
            <span className={style.prim}>String</span> <span className={style.word}>currently</span> = <span className={style.sec}>"Cyber Security intern at QinetiQ"</span><br /><br />

            <span className={style.comment}>// Skills and Interests</span><br />
            <span className={style.prim}>List</span>{"<"}<span className={style.prim}>String</span>{">"} <span className={style.word}>interests</span> = <span className={style.prim}>Arrays</span><span className={style.word}>.asList</span>(<span className={style.sec}>"Frontend Web Dev"</span>, <span className={style.sec}>"Cyber Security"</span>);<br />
            <span className={style.prim}>List</span>{"<"}<span className={style.prim}>String</span>{">"} <span className={style.word}>languages</span> = <span className={style.prim}>Arrays</span><span className={style.word}>.asList</span>(<span className={style.sec}>"Java"</span>, <span className={style.sec}>"C"</span>, <span className={style.sec}>"Haskell"</span>, <span className={style.sec}>"Python"</span>, <span className={style.sec}>"JS"</span>, <span className={style.sec}>"SQL"</span>, <span className={style.sec}>"HTML"</span>, <span className={style.sec}>"CSS"</span>);<br />
            <span className={style.prim}>List</span>{"<"}<span className={style.prim}>String</span>{">"} <span className={style.word}>technologies</span> = <span className={style.prim}>Arrays</span><span className={style.word}>.asList</span>(<span className={style.sec}>"Django"</span>, <span className={style.sec}>"Git"</span>, <span className={style.sec}>"Adobe Photoshop"</span>, <span className={style.sec}>"MS Office"</span>, <span className={style.sec}>"Linux"</span>);<br />
            <br />

            <span className={style.comment}>// Achievements</span><br />
            <span className={style.prim}>List</span>{"<"}<span className={style.prim}>String</span>{">"} <span className={style.word}>achievements</span> = <span className={style.prim}>Arrays</span><span className={style.word}>.asList</span>(<span className={style.sec}>"ICHack 2020 Winner"</span>, <span className={style.sec}>"7x Stemettes Hackathon Winner"</span>);
            <br /><br />
            </div>
            {"}"}
            
          </p>
          </div>
        
        </div>
        </Row>
    </div>
  );
}

export default About;
