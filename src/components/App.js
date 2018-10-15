import React     from 'react';
import AlexCrist from './AlexCrist.js';
import Header    from './Header.js';
import Photos    from './Photos.js';
import portraits from '../photos/portraits.js';
import adventure from '../photos/adventure.js';
import self      from '../photos/self.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contentIndex: 0 };
  }

  setContentIndex(contentIndex) {
    this.setState({ contentIndex });
  }

  render() {
    const tabs = [
      <AlexCrist />,
      <Photos content={portraits} />,
      <Photos content={adventure} />,
      <Photos content={self} />
    ];
    const tab = tabs[this.state.contentIndex];

    return (
      <div className='container'>
        <Header setContentIndex={this.setContentIndex.bind(this)} />
        <div className='border'/>
        {tab}
      </div>
    );
  }
}
