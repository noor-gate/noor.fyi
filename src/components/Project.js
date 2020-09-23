import React from 'react';
import style from './Project.module.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Project() {
  return (
    <div className={style.cont}>
          <div className={style.intro}>
          <h1>Projects.</h1><br />

          <Container>
          <Row>
            <Col lg={4}>
              <div className={style.proj}>
                <a href="https://github.com/noor-gate/quantum-music">
                <div className={style.module}>
                      <h5>Quantum Music</h5>
                      <p>Parses given MIDI files and uses wave function collapse to analyse patterns and produce a similar piece of music, which is returned as a new MIDI file</p>
                </div>
                </a>
              </div>
            </Col>
            <Col lg={4}>
              <div className={style.proj}>
                <a href="https://github.com/jameshball/osci-render">
                <div className={style.module}>
                    <h5>Osci-Render</h5>
                    <p>24 hour project that renders lines on an oscilloscope using audio, including a functional flappy bird game and any given coordinates and lines</p>
                </div>
                </a>
              </div>
            </Col>
            <Col lg={4}>
            <div className={style.proj}>
              <a href="https://github.com/noor-gate/dotfiles">
                <div className={style.module}>
                        <h5>Dotfiles </h5>
                      <p>My personal collection of dotfiles</p>
                  </div>
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
            <div className={style.proj}>
              <a href="https://github.com/noor-gate/noor-gate.github.io">
                <div className={style.module}>
                  <h5>Personal Website</h5>
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
