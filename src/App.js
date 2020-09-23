import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  Route,
  NavLink,
  BrowserRouter,
} from "react-router-dom";
import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'
import Etc from './components/Etc'

library.add(fab, faEnvelope)

function App() {
  return (
    <div>
      <BrowserRouter>

      <Route exact path="/" component={About}/>
      <Route path="/projects" component={Project}/>
      <Route path="/skills" component={Skill}/>
      <Route path="/etc" component={Etc}/>


      <div className="sidebar">

      <div className="sidetext">
      <NavLink to="/"><div className="title">Noor Sawhney</div></NavLink>

      <div className="links">
          <NavLink to="/skills">Skills</NavLink><br />
        <NavLink to="/projects">Projects</NavLink><br />
        <NavLink to="/etc">Now</NavLink><br />
        <a href="/noorsawhneycv.pdf">CV</a><br />
        
      </div>

    

      

      <div className="icons">
      <a href="https://www.linkedin.com/in/noor-sawhney-755b1b19a/"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
      <a href="https://github.com/noor-gate"><FontAwesomeIcon icon={['fab', 'github']} /></a>
      <a href="mailto:ns1619@ic.ac.uk"><FontAwesomeIcon icon="envelope" /></a>
      </div>

      </div>
      </div>
      </BrowserRouter>
      
    </div>

    

  );
}

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 120;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { margin-top: 5px; text-transform: uppercase; font-size: 14px;font-weight: bolder;color: var(--main-color);letter-spacing: 0.5px; }";
  document.body.appendChild(css);
};


export default App;
