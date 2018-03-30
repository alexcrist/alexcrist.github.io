import React, { Component } from 'react';
import Tabs from '../tabs/Tabs';
import Photos from '../tabs/photos/Photos';
import Projects from '../tabs/projects/Projects';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.setTab = this.setTab.bind(this);
    this.tabs = [{
      name: 'projects',
      content: Projects
    }, {
      name: 'photos',
      content: Photos
    }];
    const currentTab = this.tabs[0];
    this.state = { currentTab };
  }

  setTab(tab) {
    this.setState({ currentTab: tab });
  }
  
  render() {
    const Content = this.state.currentTab.content;
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">alexcrist</h1>
          <Tabs 
            tabs={this.tabs} 
            currentTab={this.state.currentTab} 
            onClick={this.setTab} />
        </div>
        <div className="App-body">
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
