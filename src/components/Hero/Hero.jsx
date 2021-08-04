import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import BackgroundVideo from '../../images/bg.mp4';
import ProfilePic from '../../images/profile_pic.jpg';

const Header = () => {

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
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <img className="w-32 h-32 border profile-pic rounded-full mx-auto" src={ProfilePic} alt="Giuseppe Barbato" />
          <div className="text-5xl md:text-7xl md:ml-6 italic font-semibold hero-title">Giuseppe Barbato</div>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <h3 className="text-5xl md:text-7xl md:ml-6 font-semibold hero-subtitle">Passionate Software Engineer</h3>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={2000} distance="30px">
          <p className="hero-cta">
            <Link to="about" smooth duration={1000}>
              <span className="cta-btn cta-btn--hero">Know me better</span>
            </Link>
          </p>
        </Fade>
      </Container>
      <video autoPlay muted loop playsInline className="fillWidth fadeIn animated background-video">
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag. I suggest you upgrade your browser.
      </video>
    </section>
  );
};

export default Header;
