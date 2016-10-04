import React, {Component, PropTypes} from 'react';
import Drawer from 'material-ui/Drawer';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {spacing, typography, zIndex} from 'material-ui/styles';
import {cyan500} from 'material-ui/styles/colors';

const SelectableList = makeSelectable(List);

const styles = {
  logo: {
    cursor: 'pointer',
    fontSize: 24,
    color: typography.textFullWhite,
    lineHeight: `${spacing.desktopKeylineIncrement}px`,
    fontWeight: typography.fontWeightLight,
    backgroundColor: cyan500,
    paddingLeft: spacing.desktopGutter,
    marginBottom: 8,
  },
  version: {
    paddingLeft: spacing.desktopGutterLess,
    fontSize: 16,
  },
};

class AppNavDrawer extends Component {
  static propTypes = {
    docked: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    onChangeList: PropTypes.func.isRequired,
    onRequestChangeNavDrawer: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    style: PropTypes.object,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
  };

  state = {
    muiVersions: [],
  };
  
  firstNonPreReleaseVersion() {
    let version;
    for (let i = 0; i < this.state.muiVersions.length; i++) {
      version = this.state.muiVersions[i];
      // If the version doesn't contain '-' and isn't 'HEAD'
      if (!/-/.test(version) && version !== 'HEAD') {
        break;
      }
    }
    return version;
  }

  handleVersionChange = (event, index, value) => {
    if (value === this.firstNonPreReleaseVersion()) {
      window.location = 'https://video.nfls.io/';
    } else {
      window.location = `https://video.nfls.io/${value}`;
    }
  };

  currentVersion() {
    if (window.location.hostname === 'localhost') return this.state.muiVersions[0];
    if (window.location.pathname === '/') {
      return this.firstNonPreReleaseVersion();
    } else {
      return window.location.pathname.replace(/\//g, '');
    }
  }

  handleRequestChangeLink = (event, value) => {
    window.location = value;
  };

  handleTouchTapHeader = () => {
    this.context.router.push('/');
    this.props.onRequestChangeNavDrawer(false);
  };

  render() {
    const {
      location,
      docked,
      onRequestChangeNavDrawer,
      onChangeList,
      open,
      style,
    } = this.props;

    return (
      <Drawer
        style={style}
        docked={docked}
        open={open}
        onRequestChange={onRequestChangeNavDrawer}
        containerStyle={{zIndex: zIndex.drawer - 100}}
      >
        <div style={styles.logo} onTouchTap={this.handleTouchTapHeader}>
          NFLS Video Center 
        </div>
        <SelectableList
          value={location.pathname}
          onChange={onChangeList}
        >
          <ListItem
            primaryText="视频"
            primaryTogglesNestedList={true}
            nestedItems={[
			  <ListItem primaryText="综合概述" value="/video/VideoOfGeneralInfo" />,
			  <ListItem primaryText="NFLSIO" value="/video/VideoOfNFLSIO" />,
              <ListItem primaryText="Bilibili" value="/video/VideoOfBilibili" />,
              <ListItem primaryText="其他" value="/video/VideoOfOthers" />,
            ]}
          />
          <ListItem
            primaryText="直播"
            primaryTogglesNestedList={true}
            nestedItems={[
			  <ListItem primaryText="综合概述" value="/broadcast/BroadGeneralInfo" />,
              <ListItem primaryText="NFLSIO直播区" value="/broadcast/BroadNFLSIO" />,
              <ListItem primaryText="B站直播区①" value="/broadcast/BroadBilibili1" />,
              <ListItem primaryText="B站直播区②" value="/broadcast/BroadBilibili2" />,
            ]}
          />
		  <ListItem
            primaryText="帮助"
            primaryTogglesNestedList={true}
            nestedItems={[
			  <ListItem 
			    primaryText="应用"
                primaryTogglesNestedList={true}
                nestedItems={[
				  <ListItem primaryText="B站客户端" value="/help/apps/Bilibili" />,
                  <ListItem primaryText="Chrome浏览器" value="/help/apps/Chrome" />,
                  <ListItem primaryText="NFLSIO客户端" value="/help/apps/NFLSIO" />,
				]}
			  />,
              <ListItem primaryText="浏览器兼容性" value="/help/BroswerCompatibility" />,
              <ListItem primaryText="关于我们" value="/help/About" />,
            ]}
          />
        </SelectableList>
        <Divider />
        <SelectableList
          value=""
          onChange={this.handleRequestChangeLink}
        >
          <Subheader>链接</Subheader>
          <ListItem primaryText="NFLSIO总站" value="https://nfls.io" />
        </SelectableList>
      </Drawer>
    );
  }
}

export default AppNavDrawer;
