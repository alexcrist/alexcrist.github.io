import React from 'react';
import portraits from '../photos/portraits.js';
import { urlsToImages } from '../util/photos.js';

export default class Portraits extends React.Component {
  render() {
    const images = urlsToImages(portraits);
    return images;
  }
}