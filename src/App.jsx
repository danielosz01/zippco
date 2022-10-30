import React from 'react'
import { Home } from './components/home/Home'
import { GalleryServices } from './components/services/GalleryServices';
import { Services } from './components/services/Services';

export const App = () => {
  return (
    <>
      <Home />
      <Services />
      <GalleryServices />
    </>
  )
};