import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from '../../MarkdownElement';
import BroadGeneralInfoMD from './BroadGeneralInfo.md';

const BroadGeneralInfo = () => (
  <div>
    <Title render={(previousTitle) => `综合信息 - ${previousTitle}`} />
    <MarkdownElement text={BroadGeneralInfoMD} />
  </div>
);

export default BroadGeneralInfo;
