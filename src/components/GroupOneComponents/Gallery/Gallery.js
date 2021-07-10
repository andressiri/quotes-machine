import React from 'react';
import ArrowPrevious from './ArrowPrevious';
import GallFirst from './GallFirst.js';
import GallSecond from './GallSecond.js';
import GallThird from './GallThird.js';
import GallFourth from './GallFourth.js';
import GallFifth from './GallFifth.js';
import ArrowNext from './ArrowNext.js';
import './../../../styles/Gallery.scss'

function Gallery () {
  return (
    <div className={`gallDiv`}>
      <ArrowPrevious />
      <GallFirst />
      <GallSecond />
      <GallThird />
      <GallFourth />
      <GallFifth />
      <ArrowNext />
    </div>
  );
};

export default Gallery;