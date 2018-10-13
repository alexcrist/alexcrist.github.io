import React from 'react';
import Header from './Header.js';
import Portraits from './Portraits.js';
import Adventure from './Adventure.js';
import Self from './Self.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.setContentIndex = this.setContentIndex.bind(this);
    this.state = {
      contentIndex: 0
    };
  }

  setContentIndex(contentIndex) {
    this.setState({ contentIndex });
  }

  render() {
    const Content = [
      Portraits,
      Adventure, 
      Self 
    ][this.state.contentIndex];
    return (
      <div className='container'>
        <Header setContentIndex={this.setContentIndex} />
        <Content />
      </div>
    );
  }
}
