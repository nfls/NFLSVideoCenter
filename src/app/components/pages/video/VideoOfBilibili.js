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
import BiliIntro from './Bilibili_Introduction.md'


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

const DataOfRick = [
    {
        date: '2016-09-22 20:43',
        cat: '生活-日常',
        name: '【极乐净土】【南京外国语学校】我同学竟然在班上用键盘演奏极乐净土',
        avid: 'av6376149',
        
    },
    {
        date: '2016-09-24 14:24',
        cat: '生活-日常',
        name: '【南京外国语学校】2012届初三五班艺术节范进中举',
        avid: 'av6395889',
        
    },
    {
        date: '2016-09-24 19:05',
        cat: '生活-日常',
        name: '【南京外国语学校】迟到的投稿2015年的元旦班级联欢~',
        avid: 'av6399760',
        
    },
];

const DataOfYQ = [
        {
        date: '2016-05-16 17:00',
        cat: '生活-日常',
        name: '【南京外国语学校】【教程】如何在教室内搭建核反应堆【雾】',
        avid: 'av4673895',
        
    },
    {
        date: '2016-06-09 12:08',
        cat: '生活-日常',
        name: '【南京外国语学校】【16P】熊孩子的日常',
        avid: 'av4912800',
        
    },
    {
        date: '2016-06-20 03:34',
        cat: '音乐-翻唱',
        name: '【三人组合唱】九九八十一',
        avid: 'av5030940',
        
    },
    {
        date: '2016-07-04 18:09',
        cat: '鬼畜-人力VOCALOID',
        name: '【南京外国语学校】【叶青音源】北京东路的日子',
        avid: 'av5199576',
        
    },
    {
        date: '2016-07-08 16:30',
        cat: '鬼畜-鬼畜调教',
        name: '【南京外国语学校】师生们真是太鬼畜啦',
        avid: 'av5250072',
        
    },
    {
        date: '2016-07-08 23:04',
        cat: '鬼畜-人力VOCALOID',
        name: '【葛平】【南京外国语学校】中国灵魂世界胸怀',
        avid: 'av5255550',
        
    },
    {
        date: '2016-07-10 13:29',
        cat: '生活-搞笑',
        name: '【南京外国语学校】我从未见过如此鬼畜的外语老师',
        avid: 'av5274285',
        
    },
    {
        date: '2016-07-16 23:20',
        cat: '生活-日常',
        name: '【南京外国语学校】2016届初中毕业纪念视频（初三版）（老师版）',
        avid: 'av5363312',
        
    },
    {
        date: '2016-07-19 01:23',
        cat: '生活-日常',
        name: '【南京外国语学校】上课的时候突然蹦出来一个窗口',
        avid: 'av5392765',
        
    },
    {
        date: '2016-07-19 22:14',
        cat: '生活-日常',
        name: '【南京外国语学校】小青青你不能这么暴力！',
        avid: 'av5404985',
        
    },
    {
        date: '2016-07-20 23:04',
        cat: '生活-日常',
        name: '【南京外国语学校】2016届高中毕业典礼视频',
        avid: 'av5419961',
        
    },
    {
        date: '2016-07-26 21:36',
        cat: '生活-搞笑',
        name: '【南京外国语学校】一次资本主义的分赃会议',
        avid: 'av5507423',
        
    },
    {
        date: '2016-07-28 21:51',
        cat: '生活-日常',
        name: '【南京外国语学校】你萎了！',
        avid: 'av5538855',
        
    },
    {
        date: '2016-07-31 09:30',
        cat: '生活-日常',
        name: '【Gentleman】【南京外国语学校】小朱说校园',
        avid: 'av5574883',
        
    },
    {
        date: '2016-08-15 23:42',
        cat: '生活-日常',
        name: '【Cosplay】【16暑期】【含花絮】活动视频',
        avid: 'av5838219',
        
    },
    {
        date: '2016-08-16 21:35',
        cat: '生活-日常',
        name: '【南京外国语学校】你见过如此丧病的可乐广告吗？',
        avid: 'av5853660',
        
    },
    {
        date: '2016-08-25 01:44',
        cat: '鬼畜-人力VOCALOID',
        name: '【金坷垃】【南京外国语学校】中国第一美国垫底',
        avid: 'av5995228',
        
    },
    {
        date: '2016-08-26 23:02',
        cat: '生活-日常',
        name: '【南京外国语学校】【15P】【持续更新】老师唱歌视频合集',
        avid: 'av6027047',
        
    },
    {
        date: '2016-08-26 23:19',
        cat: '生活-日常',
        name: '【老司机翻车】我竟然当着老师的面放老师的鬼畜',
        avid: 'av6027301',
        
    },
    {
        date: '2016-08-29 22:16',
        cat: '科技-机械',
        name: '【航拍】南京地铁二号线仙鹤门段',
        avid: 'av6074686',
        
    },
    {
        date: '2016-09-18 09:33',
        cat: '科技-趣味科普人文',
        name: '【南外SKYLINE航拍社】航拍集锦1',
        avid: 'av6328115',
        
    },
    {
        date: '????-??-?? ??:??',
        cat: '生活-日常',
        name: '【南京外国语学校】【中英IB学生会竞选】宣传视频',
        avid: 'av6389101',
        
    },
    {
        date: '????-??-??? ??:??',
        cat: '生活-日常',
        name: '【南京外国语学校】lzm是GAY!!!',
        avid: 'av6403107',
        
    },
    {
        date: '2016-09-24 22:43',
        cat: '生活-日常',
        name: '【南京外国语学校】【实拍】中英IB学生会竞选宣传20160922',
        avid: 'av6403371',
        
    },
];

const DataOfOthers = [
	{
		date: '2014-04-16 15:38',
		cat: '生活-日常',
		name: '南京外国语学校建校50周年庆典',
		avid: 'av1066805',
		uploader: 'FurukawaNagisa06',
		uploader_id: '894332',
	},
	{
		date: '2014-07-06 21:35',
		cat: '生活-搞笑',
		name: '【毕业季】感谢-初三八班毕业纪念',
		avid: 'av1262358',
		uploader: '不会起名的鱼',
		uploader_id: '3289666'
	},
	{
		date: '2016-05-26 16:49',
		cat: '生活-日常',
		name: '2016 BCA IDOL 520 (南京外国语学校中加国际高中)',
		avid: 'av4770128',
		uploader: '拖延症研究院钻石会员',
		uploader_id: '31110918',
	},
	{
		date: '2015-06-11 20:17',
		cat: '生活-日常',
		name: '2015南京外国语学校毕业典礼用',
		avid: 'av2426786',
		uploader: 'FurukawaNagisa06',
		uploader_id: '894332',
	},
	{
		date: '2016-08-20 15:54',
		cat: '生活-日常',
		name: '2016中加夏令营 完整版（包含闭幕式）',
		avid: 'av5917326',
		uploader: '拖延症研究院钻石会员',
		uploader_id: '31110918',
	},
    {
        date: '2016-04-16 16:07',
        cat: '生活-日常',
        name: '南外的鬼畜课间操',
        avid: 'av4381533',
        uploader: '机智的路易斯',
		uploader_id: '3455049',
    },
	{
		date: '2016-04-26 17:47',
		cat: '生活-日常',
		name: '南外课间操倒闭了',
		avid: 'av4476750',
		uploader: '香蕉王mrB',
		uploader_id: '1893498',
	},
	{
		date: '2016-04-29 18:02',
		cat: '生活-日常',
		name: '文艺版南外课间操vs小幸运-在我看不到的天际你展开了双翼',
		avid: 'av4501635',
		uploader: '极度暴走的雾君',
		uploader_id: '13112124',
	},
	{
		date: '2016-05-01 23:39',
		cat:  '生活-日常',
		name: '【鬼畜】威风堂堂×南外课间操',
		avid: 'av4529921',
		uploader: '你是我的充要条件',
		uploader_id: '13290237',
	},
	{
		date: '2016-09-22 20:53',
		cat: '生活-运动',
		name: '主席一号 (1)',
		avid: 'av6376263',
		uploader: '梦呓成书',
		uploader_id: '13722028',
	},
];

const bilibili_address = "www.bilibili.com/video/"

export default class VideoOfNFLSIO extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  AddCom(data){
	  
  }
  handleChange = (value) => {
    this.setState({
      slideIndex: value,
	  fixedHeader: false,
      fixedFooter: false,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '300px',
    });
    
 }
  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
	  
      <div>
		<Title render={(previousTitle) => `Bilibili - ${previousTitle}`} />
		<MarkdownElement text={BiliIntro} />
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="rickliu2000" value={0} />
          <Tab label="液氢NFLS" value={1} />
          <Tab label="其他" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
        <div>
			<Table bodyStyle={{overflow:'visible'}} height='600px'>
			<TableHeader>
				<TableRow>
					<TableHeaderColumn style={styles.no_width}>序号</TableHeaderColumn>
					<TableHeaderColumn style={styles.date_width}>上传日期</TableHeaderColumn>
					<TableHeaderColumn style={styles.cat_width}>分区</TableHeaderColumn>
					<TableHeaderColumn style={styles.av_width}>AV号</TableHeaderColumn>
					<TableHeaderColumn>标题</TableHeaderColumn>
				 </TableRow>
			  </TableHeader>
			  <TableBody>
				{DataOfRick.map( (row, index) => (
				  <TableRow key={index} selected={row.selected}>
					<TableRowColumn style={styles.no_width}>{index+1}</TableRowColumn>
					<TableRowColumn style={styles.date_width}>{row.date}</TableRowColumn>
					<TableRowColumn style={styles.cat_width}>{row.cat}</TableRowColumn>
					<TableRowColumn style={styles.av_width}>{row.avid}</TableRowColumn>
					<TableRowColumn><a href={'http://www.bilibili.com/video/'+row.avid+"/"}>{row.name}</a></TableRowColumn>
					
				  </TableRow>
				  ))}
			  </TableBody>
			</Table>
		  </div>
          <div style={styles.slide}>
            <Table bodyStyle={{overflow:'visible'}} height='600px'>
			<TableHeader>
				<TableRow>
					<TableHeaderColumn style={styles.no_width}>序号</TableHeaderColumn>
					<TableHeaderColumn style={styles.date_width}>上传日期</TableHeaderColumn>
					<TableHeaderColumn style={styles.cat_width}>分区</TableHeaderColumn>
					<TableHeaderColumn style={styles.av_width}>AV号</TableHeaderColumn>
					<TableHeaderColumn>标题</TableHeaderColumn>
				 </TableRow>
			  </TableHeader>
			  <TableBody>
				{DataOfYQ.map( (row, index) => (
				  <TableRow key={index} selected={row.selected}>
					<TableRowColumn style={styles.no_width}>{index+1}</TableRowColumn>
					<TableRowColumn style={styles.date_width}>{row.date}</TableRowColumn>
					<TableRowColumn style={styles.cat_width}>{row.cat}</TableRowColumn>
					<TableRowColumn style={styles.av_width}>{row.avid}</TableRowColumn>
					<TableRowColumn><a href={'http://www.bilibili.com/video/'+row.avid+"/"}>{row.name}</a></TableRowColumn>
				  </TableRow>
				  ))}
			  </TableBody>
			</Table>
          </div>
          <div style={styles.slide}>
            <Table bodyStyle={{overflow:'visible'}} height='600px'>
			<TableHeader>
				<TableRow>
					<TableHeaderColumn style={styles.no_width}>序号</TableHeaderColumn>
					<TableHeaderColumn style={styles.date_width}>上传日期</TableHeaderColumn>
					<TableHeaderColumn style={styles.uploader_width}>UP主</TableHeaderColumn>
					<TableHeaderColumn style={styles.av_width}>AV号</TableHeaderColumn>
					<TableHeaderColumn style={styles.cat_width}>分区</TableHeaderColumn>
					<TableHeaderColumn>标题</TableHeaderColumn>
					
				 </TableRow>
			  </TableHeader>
			  <TableBody>
				{DataOfOthers.map( (row, index) => (
				  <TableRow key={index} selected={row.selected}>
					<TableRowColumn style={styles.no_width}>{index+1}</TableRowColumn>
					<TableRowColumn style={styles.date_width}>{row.date}</TableRowColumn>
					<TableRowColumn style={styles.uploader_width}>{row.uploader}</TableRowColumn>
					<TableRowColumn style={styles.av_width}>{row.avid}</TableRowColumn>
					<TableRowColumn style={styles.cat_width}>{row.cat}</TableRowColumn>
					<TableRowColumn><a href={'http://www.bilibili.com/video/'+row.avid+"/"}>{row.name}</a></TableRowColumn>
					
				  </TableRow>
				  ))}
			  </TableBody>
			</Table>
          </div>
        </SwipeableViews>
      </div>
	
    );
  }
}