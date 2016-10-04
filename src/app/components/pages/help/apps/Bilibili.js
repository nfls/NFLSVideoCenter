import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from '../../../MarkdownElement';
import BilibiliMD from './Bilibili.md';

const BilibiliApps = () => (
  <div>
    <Title render={(previousTitle) => `B站客户端 - ${previousTitle}`} />
    <MarkdownElement text={BilibiliMD} />
  </div>
);

export default BilibiliApps;
