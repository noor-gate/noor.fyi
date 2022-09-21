import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  Route,
  BrowserRouter,
} from "react-router-dom";
import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'
import Etc from './components/Etc'
import Window from './components/Window'
import Star from './components/Star'
import Nav from './components/Nav'
import Interests from './components/Interests'

library.add(fab, faEnvelope)

function App() {
  return (
    <div>


      
      <BrowserRouter>


      

     <div className="main">
      <Route exact path="/" component={About}/>
      <Route path="/projects" component={Project}/>
      <Route path="/skills" component={Skill}/>
      <Route path="/etc" component={Etc}/>
      <Route path="/interests" component={Interests}/>
      </div>
      <Nav></Nav>
      
      <div className="sidebar">
      <div className="box">
      <div className="dialog-2">
      
				<div className="right-point"></div>
        <span className="loading"></span>
			</div>
      </div>


      <Window className="window"></Window>
      <Star top="120px" right="40px" className="star"></Star>
      
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
