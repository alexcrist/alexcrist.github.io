import React from 'react';
import adventure from '../photos/adventure.js';
import { urlsToImages } from '../util/photos.js';

export default class Adventure extends React.Component {
  render() {
    const images = urlsToImages(adventure);
    return images;
  }
}