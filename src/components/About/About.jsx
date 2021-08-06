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

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <pre className="code-block"><code>Hello World!</code></pre>
                <p className="about-wrapper__info-text">
                  My name is <b>Giuseppe Barbato</b>, I am a <b>26 years old software engineer</b> from Bari, Italy.
                </p>
                <p className="about-wrapper__info-text">
                  I <i>love</i> building <b>efficient, clean and reliable software</b> since my early years and, because of that, I turned <b>hundreds of hours of studying</b> code-related material into my job.
                  <br />
                  I always learn new <i>technologies, frameworks and methodologies</i>.
                  <br />
                  The software engineering world runs fast but I keep up the pace!
                </p>
                <p className="about-wrapper__info-text">
                  In 2018 <b>I graduated in Computer Science</b> and started working for a corporation in the <i>banking business area</i>.
                </p>
                <p className="about-wrapper__info-text">
                  I currently work as consultant for a <i>world-known group</i>, developing an Enterprise Software used by <b>20.000+ professionals <i>in the legal sector</i></b>.
                </p>
                <p className="about-wrapper__info-text">
                  I am used to work with <b>AGILE methodology</b> and I cover the role of <b>Scrum Master</b> in my team.
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
