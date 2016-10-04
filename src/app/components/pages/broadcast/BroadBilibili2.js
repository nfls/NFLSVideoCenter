import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from '../../MarkdownElement';
import BroadBilibili2MD from './BroadBilibili2.md';

const BroadBilibili2 = () => (
  <div>
    <Title render={(previousTitle) => `B站直播区② - ${previousTitle}`} />
    <MarkdownElement text={BroadBilibili2MD} />
	<embed src="http://static.hdslb.com/live-static/swf/LivePlayerEx_1.swf?room_id=1294599&cid=1294599&state=LIVE"width="1280" height="720"></embed>
  </div>
);

export default BroadBilibili2;
