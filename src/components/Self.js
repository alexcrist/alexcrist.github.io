import React from 'react';
import self from '../photos/self.js';
import { urlsToImages } from '../util/photos.js';

export default class Self extends React.Component {
  render() {
    const images = urlsToImages(self);
    return images;
  }
}