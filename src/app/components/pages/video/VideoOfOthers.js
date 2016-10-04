import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from '../../MarkdownElement';
import VideoOthers from './Others.md';

const VideoOfOthers = () => (
  <div>
    <Title render={(previousTitle) => `其他 - ${previousTitle}`} />
    <MarkdownElement text={VideoOthers} />
  </div>
);

export default VideoOfOthers;
