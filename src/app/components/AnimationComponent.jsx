'use client'
import { TypeAnimation } from 'react-type-animation';

export const AnimationComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Cris!',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Front-end Developer',
        1000,
        'Back-end Developer',
        1000,
        'Coding enthusiastic',
        1000
      ]}
      wrapper="span"
      speed={20}
      repeat={Infinity}
    />
  );
};