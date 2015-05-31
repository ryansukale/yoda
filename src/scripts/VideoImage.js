'use strict';

import React from 'react';
import Join from 'react/lib/joinClasses';
import VideoDuration from './VideoDuration';

export default React.createClass({
  getInitialState() {
    return {
      loaded: false
    };
  },

  componentDidMount() {
    var imgTag = React.findDOMNode(this.refs.image);
    var imgSrc = imgTag.getAttribute('src');

    var img = new window.Image();
    img.onload = this.onImageLoad;
    img.src = imgSrc;
  },

  onImageLoad() {
    if(this.isMounted()){
      return new Promise(resolve => {
        resolve(this.setState({loaded: true}));
      });
    }
  },

  render() {
    var imgClasses = 'video-thumbnail image-thumbnail';
    if (this.state.loaded) {
      imgClasses = Join(imgClasses, 'video-thumbnail-loaded');
    }
    return (
      <img ref="image" className={imgClasses} {...this.props} />
    );
  }
});