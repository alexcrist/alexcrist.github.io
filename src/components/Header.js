import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.tab        = this.tab.bind(this);
    this.onClickTab = this.onClickTab.bind(this);
    this.currentTab = 0;
  }

  onClickTab(index) {
    return () => {
      this.currentTab = index;
      this.props.setContentIndex(index);
    };
  }

  tab(title, index) {
    const className = this.currentTab === index ? 'tab tab-selected' : 'tab';
    const onClick   = this.onClickTab(index);
    const tab       = <div className={className} onClick={onClick}>{title}</div>;
    return tab;
  }

  render() {
    const alexcrist = this.tab('alex crist', 0);
    const portraits = this.tab('portraits', 1);
    const adventure = this.tab('adventure', 2);
    const self      = this.tab('self', 3);
    const github    = <a target='_' href='https://github.com/alexcrist'>github</a>;
    const instagram = <a target='_' href='https://instagram.com/alex_crist'>instagram</a>;

    return [
        <div>{alexcrist}</div>,
        <div>{portraits} . {adventure} . {self}
          <span className='links'>{github} . {instagram}</span>
        </div>,
    ];
  }
}
