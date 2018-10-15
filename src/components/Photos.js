import React from 'react';
import _     from 'lodash';

export default class Photos extends React.Component {
  render() {
    return _.map(this.props.content, item => {
      return <img className='photo' src={item} />;
    });
  }
}