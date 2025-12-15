import React from 'react';
import HomeHeroBg from './HomeHero.bg';
import HomeHeroFeatures from './HomeHero.features';

function HomeHero() {
  return (
    <section className='relative w-full lg:min-h-fit'>
      <HomeHeroBg />
      <HomeHeroFeatures />
    </section>
  );
}
export default HomeHero;
