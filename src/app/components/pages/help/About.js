import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from '../../MarkdownElement';
import AboutMD from './About.md';

const IOAbout = () => (
  <div>
    <Title render={(previousTitle) => `关于 - ${previousTitle}`} />
    <MarkdownElement text={AboutMD} />
  </div>
);

export default IOAbout;
