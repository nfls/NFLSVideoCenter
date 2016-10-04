import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import Title from 'react-title-component';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import MarkdownElement from '../../MarkdownElement';
import NFLSIOIntro from './nflsio.md'

const TableData=[
	{
		name: '张其帮上课视频',
		adress: 'https://dl.oscs.io/2015Senior2-4/'
	},
]

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
  no_width:{
		width:5,
	},
	date_width:{
		width:70
	},
	cat_width:{
		width:80
	},
	name_width:{
		width:400
	},
	av_width:{
		width:50
	},
	uploader_width:{
		width:120
	},
	propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const VideoOfNFLSIO = () => (
  <div>
    <Title render={(previousTitle) => `NFLSIO - ${previousTitle}`} />
	<MarkdownElement text={NFLSIOIntro} />
	<Table bodyStyle={{overflow:'visible'}}>
		<TableHeader>
			<TableRow>
				<TableHeaderColumn style={styles.no_width}>序号</TableHeaderColumn>
				<TableHeaderColumn>标题</TableHeaderColumn>
		    </TableRow>
	    </TableHeader>
		<TableBody>
		{TableData.map( (row, index) => (
			<TableRow key={index} selected={row.selected}>
				<TableRowColumn style={styles.no_width}>{index+1}</TableRowColumn>
				<TableRowColumn><a href={row.adress}>{row.name}</a></TableRowColumn>
					
			</TableRow>
		))}
		</TableBody>
	</Table>
  </div>
);

export default VideoOfNFLSIO;
