import React from 'react';
import Title from 'react-title-component';

import MarkdownElement from '../../MarkdownElement';
import VideoGeneralInfo from './General-Info.md';

const VideoOfGeneralInfo = () => (
  <div>
    <Title render={(previousTitle) => `综合信息 - ${previousTitle}`} />
    <MarkdownElement text={VideoGeneralInfo} />
  </div>
);

export default VideoOfGeneralInfo;
