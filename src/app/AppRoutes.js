import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

import Master from './components/Master';
import Home from './components/pages/Home';

import VideoOfGeneralInfo from './components/pages/video/VideoOfGeneralInfo';
import VideoOfBilibili from './components/pages/video/VideoOfBilibili';
import VideoOfNFLSIO from './components/pages/video/VideoOfNFLSIO';
import VideoOfOthers from './components/pages/video/VideoOfOthers';

import BroadGeneralInfo from './components/pages/broadcast/BroadGeneralInfo';
import BroadBilibili1 from './components/pages/broadcast/BroadBilibili1';
import BroadBilibili2 from './components/pages/broadcast/BroadBilibili2';
import BroadNFLSIO from './components/pages/broadcast/BroadNFLSIO';

import BilibiliApps from './components/pages/help/apps/Bilibili';
import ChromeApps from './components/pages/help/apps/Chrome';
import NFLSIOApps from './components/pages/help/apps/NFLSIO';
import BroswerCompatibility from './components/pages/help/BroswerCompatibility';
import IOAbout from './components/pages/help/About';

/**
 * Routes: https://github.com/reactjs/react-router/blob/master/docs/API.md#route
 *
 * Routes are used to declare your view hierarchy.
 *
 * Say you go to http://material-ui.com/#/components/paper
 * The react router will search for a route named 'paper' and will recursively render its
 * handler and its parent handler like so: Paper > Components > Master
 */
const AppRoutes = (
  <Route path="/" component={Master}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Redirect from="video" to="/video/VideoOfGeneralInfo" />
    <Route path="video">
      <Route path="VideoOfGeneralInfo" component={VideoOfGeneralInfo} />
      <Route path="VideoOfBilibili" component={VideoOfBilibili} />
      <Route path="VideoOfNFLSIO" component={VideoOfNFLSIO} />
      <Route path="VideoOfOthers" component={VideoOfOthers} />
    </Route>
    <Redirect from="broadcast" to="/broadcast/BroadGeneralInfo" />
    <Route path="broadcast">
      <Route path="BroadGeneralInfo" component={BroadGeneralInfo} />
      <Route path="BroadBilibili1" component={BroadBilibili1} />
      <Route path="BroadBilibili2" component={BroadBilibili2} />
      <Route path="BroadNFLSIO" component={BroadNFLSIO} />
    </Route>
	<Redirect from="help" to="/help/About" />
    <Route path="help">
      <Route path="apps/bilibili" component={BilibiliApps} />
	  <Route path="apps/chrome" component={ChromeApps} />
	  <Route path="apps/nflsio" component={NFLSIOApps} />
      <Route path="broswercompatibility" component={BroswerCompatibility} />
      <Route path="about" component={IOAbout} />
    </Route>
  </Route>
);

export default AppRoutes;
