import { useEffect, useRef } from 'react';
import { HeroContainer, HeroTitle } from './styled';
import { HeroSlider } from '../heroSlider/heroSlider/heroSlider';

export const Hero = () => {
  const heroRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = heroRef.current;
      const scrollTop = window.scrollY;
      const heroOffset = heroElement.offsetTop;

      if (scrollTop > heroOffset - window.innerHeight / 2) {
        heroElement.classList.add('visible');
      } else {
        heroElement.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeroContainer ref={heroRef}>
      <HeroTitle>Hi Dudes</HeroTitle>
      <HeroSlider/>
    </HeroContainer>
  );
};