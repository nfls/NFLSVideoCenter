import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from '../../MarkdownElement';
import BroadBilibili1MD from './BroadBilibili1.md';

const BroadBilibili1 = () => (
  <div>
    <Title render={(previousTitle) => `B站直播区① - ${previousTitle}`} />
    <MarkdownElement text={BroadBilibili1MD} />
	<embed src="http://static.hdslb.com/live-static/swf/LivePlayerEx_1.swf?room_id=234963&cid=234963&state=LIVE"width="1280" height="720"></embed>
  </div>
);

export default BroadBilibili1;
