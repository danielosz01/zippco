import React from 'react'
import { About } from './components/about/About';
import { Features } from './components/features/Features';
import { Footer } from './components/footer/Footer';
import { Galery } from './components/galery/Galery';
import { Home } from './components/home/Home'
import { Services } from './components/services/Services';

export const App = () => {
  return (
    <>
      <Home />
      <Services />
      <Features />
      <About />
      {<Galery />}
      <Footer />

    </>
  )
};