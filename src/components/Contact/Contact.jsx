import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={400} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              Do you want to get in touch?
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href="mailto:giuseppe95barbato+careers@gmail.com"
            >
              Let&apos;s Talk
            </a>

            <div className="social-links">
              {networks &&
                networks.map((network) => {
                  const { id, name, url } = network;
                  return (
                    <a
                      key={id}
                      href={url}
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label={name}
                    >
                      <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                    </a>
                  );
                })}
            </div>

            <span className="back-to-top">
              <Link to="hero" smooth duration={1000}>
                <i className="fa fa-angle-up" aria-hidden="true" />
              </Link>
            </span>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
