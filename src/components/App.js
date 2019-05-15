import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import PhotoAlbum from './photos/PhotoAlbum';
import faroe01 from '../assets/faroe01.jpg';
import faroe02 from '../assets/faroe02.jpg';
import faroe03 from '../assets/faroe03.jpg';
import faroe04 from '../assets/faroe04.jpg';

export default function App() {
  const photos = [
    faroe01,
    faroe02,
    faroe03,
    faroe04
  ];

  return (
    <>
      <Header />
      <PhotoAlbum title="Faroe Islands" photos={photos} />
      <Footer />
    </>
  );
}
