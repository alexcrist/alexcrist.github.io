import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.tab = this.tab.bind(this);
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
    const onClick = this.onClickTab(index);
    const tab = <div className={className} onClick={onClick}>{title}</div>;
    return tab;
  }

  render() {
    const github = <a href='https://github.com/alexcrist'>github</a>;
    const instagram = <a href='https://instagram.com/alex_crist'>instagram</a>;

    const portraits = this.tab('portraits', 0);
    const adventure = this.tab('adventure', 1);
    const self = this.tab('self', 2);

    return [
        <div>links:&nbsp;&nbsp;{github} . {instagram}</div>,
        <div>photos: {portraits} . {adventure} . {self}</div>,
    ];
  }
}
