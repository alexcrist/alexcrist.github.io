import React, { Component } from 'react';
import _ from 'lodash';
import makeClass from 'classnames';
import '../styles/Tabs.css';

class Tabs extends Component {
  onClick(tab) {
    return () => {
      this.props.onClick(tab);
    }
  }

  render() {
    const tabs = _.map(this.props.tabs, (tab, index) => {
      const classes = makeClass('Tabs-tab', {
        'Tabs-current': tab === this.props.currentTab
      });

      return (
        <div className={classes} key={index}>
          <h3 className='Tabs-title' onClick={this.onClick(tab)}>{tab}</h3>
        </div>
      );
    });
    
    return (
      <div className='Tabs'>
        {tabs}
      </div>
    );
  }
}

export default Tabs;
