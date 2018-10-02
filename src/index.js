import React from "react";
import ReactDOM from "react-dom";
import Header from './Header.js';
import Home from './Home.js';
import Projects from './Projects.js';
import Climbing from './Climbing.js';
import './index.css';

class Index extends React.Component {
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
    const Content = [Home, Projects, Climbing][this.state.contentIndex];
    return (
      <div className='container'>
        <Header setContentIndex={this.setContentIndex} />
        <Content />
      </div>
    );
  }
}

ReactDOM.render(<Index/>, document.getElementById('root'));
