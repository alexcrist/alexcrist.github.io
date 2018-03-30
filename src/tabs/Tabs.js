import React from 'react';
import _ from 'lodash';
import makeClass from 'classnames';

import './Tabs.css';

const Tabs = ({ tabs, currentTab, onClick }) => {

  const tabElements = _.map(tabs, (tab, index) => {
    const classes = makeClass('Tabs-tab', {
      'Tabs-current': _.isEqual(tab, currentTab)
    });

    return (
      <div className={classes} key={index}>
        <h3 className='Tabs-title' onClick={() => onClick(tab)}>{tab.name}</h3>
      </div>
    );
  });
  
  return (
    <div className='Tabs'>
      {tabElements}
    </div>
  );
};

export default Tabs;
