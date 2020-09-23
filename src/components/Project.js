import React from 'react';
import style from './Project.module.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Project() {
  return (
    <div className={style.cont}>
          
          <span>Projects</span><br /><br />
          <div className={style.intro}>
          <Container>
          <Row>
            <Col lg={6}>
              <div className={style.proj}>
                <a href="https://github.com/noor-gate/quantum-music">
                <div className={style.module}>
                      <p>Quantum Music</p>
                      <p>Parses given MIDI files and uses wave function collapse to analyse patterns and produce a similar piece of music, which is returned as a new MIDI file</p>
                </div>
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className={style.proj}>
                <a href="https://github.com/jameshball/osci-render">
                <div className={style.module}>
                    <p>Osci-Render</p>
                    <p>24 hour project that renders lines on an oscilloscope using audio, including a functional flappy bird game and any given coordinates and lines</p>
                </div>
                </a>
              </div>
            </Col>
          </Row>
          <Row>
          <Col lg={6}>
            <div className={style.proj}>
              <a href="https://github.com/noor-gate/dotfiles">
                <div className={style.module}>
                        <p>Dotfiles </p>
                      <p>My personal collection of dotfiles</p>
                  </div>
                </a>
              </div>
            </Col>
            <Col lg={6}>
            <div className={style.proj}>
              <a href="https://github.com/noor-gate/noor.fyi">
                <div className={style.module}>
                  <p>Personal Website</p>
                  <p>Built this website from scratch in ReactJS </p>
                </div>
              </a>
            </div>
            </Col>
          </Row>
          </Container>

          </div>
    </div>
  );
}

export default Project;
