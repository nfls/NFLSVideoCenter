import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from '../../MarkdownElement';
import BroadNFLSIOMD from './BroadNFLSIO.md';

const BroadNFLSIO = () => (
  <div>
    <Title render={(previousTitle) => `NFLSIO直播区 - ${previousTitle}`} />
    <MarkdownElement text={BroadNFLSIOMD} />
  </div>
);

export default BroadNFLSIO;
