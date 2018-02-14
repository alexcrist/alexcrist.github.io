import React, { Component } from 'react';
import Tabs from './Tabs';
import Photos from './Photos';
import Projects from './Projects';
import '../styles/App.css';

const photoTab = 'Photos';
const projectTab = 'Projects';
const tabs = [ photoTab, projectTab ];
const tabMap = {
  [photoTab]: Photos,
  [projectTab]: Projects
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab: photoTab
    }
    this.setTab = this.setTab.bind(this);
  }

  setTab(tab) {
    this.setState({ currentTab: tab });
  }
  
  render() {
    const Content = tabMap[this.state.currentTab];

    return (
      <div className="App">
        <div className="App-body">
          <div className="App-header">
            <h1 className="App-title">alexcrist</h1>
          </div>
          <Tabs currentTab={this.state.currentTab} tabs={tabs} onClick={this.setTab} />
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
