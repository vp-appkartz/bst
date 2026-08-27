import React from 'react';
import Hero from '../components/Hero';
import Story from '../components/Story';
import MenuCategories from '../components/MenuCategories';
import SignatureDishes from '../components/SignatureDishes';
import Reviews from '../components/Reviews';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <div>
      <Hero />
      <Story />
      <MenuCategories />
      <SignatureDishes />
      <Reviews />
      <CTA />
    </div>
  );
}
