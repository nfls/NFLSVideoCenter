import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from '../../../MarkdownElement';
import NFLSIOMD from './NFLSIO.md';

const NFLSIOApps = () => (
  <div>
    <Title render={(previousTitle) => `NFLSIO客户端 - ${previousTitle}`} />
    <MarkdownElement text={NFLSIOMD} />
  </div>
);

export default NFLSIOApps;
