import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from '../../../MarkdownElement';
import ChromeMD from './Chrome.md';

const ChromeApps = () => (
  <div>
    <Title render={(previousTitle) => `Chrome - ${previousTitle}`} />
    <MarkdownElement text={ChromeMD} />
  </div>
);

export default ChromeApps;
