import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  function getYears() {
    let birthDate = new Date(1995, 4, 15);
    var ageDifMs = Date.now() - birthDate;
    var ageDate = new Date(ageDifMs);
    return ageDate.getUTCFullYear() - 1970;
  }

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={300} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={400} distance="30px">
              <div className="about-wrapper__info">
                <pre className="code-block">
                  <code>Hello World!</code>
                </pre>
                <p className="about-wrapper__info-text">
                  My name is <b>Giuseppe Barbato</b>, I am a{' '}
                  <b>{getYears()} years old software engineer</b> from Bari, Italy.
                </p>
                <p className="about-wrapper__info-text">
                  I <i>love</i> building <b>efficient, clean and reliable software</b> since my
                  early years and, because of that, I turned <b>hundreds of hours of studying</b>{' '}
                  code-related material into my job.
                  <br />I always learn new <i>technologies, frameworks and methodologies</i>.
                  <br />
                  The software engineering world runs fast but I keep up the pace!
                </p>
                <p className="about-wrapper__info-text">
                  In 2018 <b>I graduated in Computer Science</b> and started working for a
                  corporation in the <i>banking business area</i>.
                </p>
                <p className="about-wrapper__info-text">
                  Previoulsy, I worked as consultant for a <i>world-known group</i>, developing an
                  Enterprise Software used by{' '}
                  <b>
                    20.000+ professionals <i>in the legal sector</i>
                  </b>
                  .
                  <br />
                  <br />
                  <b>At the moment</b>, I work at{' '}
                  <a href="https://altilia.ai" target="_blank">
                    Altilia
                  </a>{' '}
                  building an automated document processing platform based on Artificial
                  Intelligence.
                  <br />
                  In 2022, I attended an{' '}
                  <b>Executive Master at GSOM (Graduated School of Management)</b> by Milan
                  Polythecnic in <i>"Data Science and Business Analytics"</i>.
                </p>
                <p className="about-wrapper__info-text">
                  <br />I am used to work with <b>AGILE methodology</b>, previously I covered the
                  role of <b>Scrum Master</b> and now I am <b>Fronted Tech Lead</b>.
                </p>
                {/* {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )} */}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
