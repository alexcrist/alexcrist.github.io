import React from "react";
import ReactDOM from "react-dom";
import content from './content.js';
import './index.scss';

class Index extends React.Component {
  render() {
    return (
      <div className='container'>
        {content}
      </div>
    );
  }
}

ReactDOM.render(<Index/>, document.getElementById('root'));
