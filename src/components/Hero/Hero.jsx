import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import BackgroundVideo from '../../images/bg.mp4';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { cta } = hero;

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
          <div className="text-5xl md:text-7xl md:ml-6 font-semibold hero-title">Giuseppe Barbato</div>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <h3 className="hero-subtitle">Passionate Software Engineer</h3>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={2000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
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
