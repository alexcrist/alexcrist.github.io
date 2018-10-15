import React  from 'react';
import getAge from 'get-age';

export default class AlexCrist extends React.Component {
  render() {
    const age = getAge('1996-03-16');
    return [
      <div>{age} year old from Seattle, WA</div>,
      <div>Northeastern University, CS, 2019</div>,
      <div>Loves adventure, climbing rocks, making things,</div>,
      <div>and being a big computer nerd</div>,
    ];
  }
}