import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from '../../MarkdownElement';
import BroswerCompatibilityMD from './BroswerCompatibility.md';

const BroswerCompatibility = () => (
  <div>
    <Title render={(previousTitle) => `浏览器兼容性 - ${previousTitle}`} />
    <MarkdownElement text={BroswerCompatibilityMD} />
	<audio src="sound/Slow Motion.mp3" controls="controls"></audio>
  </div>
);

export default BroswerCompatibility;
