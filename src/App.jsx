import React from 'react'
import { Footer } from './components/footer/Footer';
import { Galery } from './components/galery/Galery';
import { Home } from './components/home/Home'
import { GalleryServices } from './components/services/GalleryServices';
import { Services } from './components/services/Services';

export const App = () => {
  return (
    <>
      <Home />
      <Services />
      <Galery />
      <Footer />

    </>
  )
};