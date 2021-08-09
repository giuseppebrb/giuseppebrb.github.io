import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import SkillImg from '../Image/SkillImg';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);

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
    <section id="skills">
      <Container>
        <div className="project-wrapper">
          <Title title="Skills" />
          <Fade
            right={isDesktop}
            bottom={isMobile}
            duration={1000}
            delay={300}
            distance="30px"
          >
            <p className="react-reveal mb-4">Technologies and languages I played and worked with in these years.</p>
          </Fade>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-y-8">
            {skills.map(skill => {
                  const { title, img, id } = skill;
                  return (
                    <Fade
                      key={id}
                      right={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={400}
                      distance="30px"
                    >
                      <div>
                        <Tilt
                          options={{
                            reverse: false,
                            max: 16,
                            perspective: 3000,
                            scale: 1.1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <SkillImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                        <div className="font-semibold">{title}</div>
                      </div>
                    </Fade>
                  );
              })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
