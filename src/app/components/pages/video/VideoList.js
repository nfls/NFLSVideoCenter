import React from 'react';
import Title from 'react-title-component';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import MarkdownElement from '../../MarkdownElement';

const styles = {
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
	}
}
const VideoList = () => (
  <div>
    <Title render={(previousTitle) => `NFLSIO - ${previousTitle}`} />
    <Table bodyStyle={{overflow:'visible'}}>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn style={styles.no_width}>序号</TableHeaderColumn>
		<TableHeaderColumn style={styles.date_width}>上传日期</TableHeaderColumn>
		<TableHeaderColumn style={styles.cat_width}>分区</TableHeaderColumn>
		<TableHeaderColumn style={styles.name_width}>标题</TableHeaderColumn>
		<TableHeaderColumn>AV号</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
		<TableRow>
		  <TableRowColumn style={styles.no_width}>01</TableRowColumn>
		  <TableRowColumn style={styles.date_width}>2016-09-22 20:43</TableRowColumn>
		  <TableRowColumn style={styles.cat_width}>生活-日常</TableRowColumn>
		  <TableRowColumn style={styles.name_width}>【极乐净土】【南京外国语学校】我同学竟然在班上用键盘演奏极乐净土</TableRowColumn>
		  <TableRowColumn>av6376149</TableRowColumn>
		</TableRow>
		<TableRow>
		  <TableRowColumn>02</TableRowColumn>
		  <TableRowColumn>2016-09-24 14:24</TableRowColumn>
		  <TableRowColumn>生活-日常</TableRowColumn>
		  <TableRowColumn>【南京外国语学校】2012届初三五班艺术节范进中举</TableRowColumn>
		  <TableRowColumn>av6395889</TableRowColumn>
		</TableRow>
		<TableRow>
		  <TableRowColumn>03</TableRowColumn>
		  <TableRowColumn>2016-09-24 19:05</TableRowColumn>
		  <TableRowColumn>生活-日常</TableRowColumn>
		  <TableRowColumn>【南京外国语学校】迟到的投稿 2015年的元旦班级联欢~</TableRowColumn>
		  <TableRowColumn>av6399760</TableRowColumn>
		</TableRow>
		<TableRow>
		  <TableRowColumn>01</TableRowColumn>
		  <TableRowColumn>2016-05-16 17:00</TableRowColumn>
		  <TableRowColumn>生活-日常</TableRowColumn>
		  <TableRowColumn>【南京外国语学校】【教程】如何在教室内搭建核反应堆【雾】</TableRowColumn>
		  <TableRowColumn>av4673895</TableRowColumn>
		</TableRow>
		<TableRow>
		  <TableRowColumn>02</TableRowColumn>
		  <TableRowColumn>2016-06-09 12:08</TableRowColumn>
		  <TableRowColumn>生活-日常</TableRowColumn>
		  <TableRowColumn>【南京外国语学校】【16P】熊孩子的日常</TableRowColumn>
		  <TableRowColumn>av4912800</TableRowColumn>
		</TableRow>
		<TableRow>
		  <TableRowColumn>03</TableRowColumn>
		  <TableRowColumn>2016-06-20 03:34</TableRowColumn>
		  <TableRowColumn>音乐-翻唱</TableRowColumn>
		  <TableRowColumn>【三人组合唱】九九八十一</TableRowColumn>
		  <TableRowColumn>av5030940</TableRowColumn>
		</TableRow>
		<TableRow>
		  <TableRowColumn>04</TableRowColumn>
		  <TableRowColumn>2016-07-04 18:09</TableRowColumn>
		  <TableRowColumn>鬼畜-人力VOCALOID</TableRowColumn>
		  <TableRowColumn>【南京外国语学校】【叶青音源】北京东路的日子</TableRowColumn>
		  <TableRowColumn>av5199576</TableRowColumn>
		</TableRow>
		<TableRow>
		  <TableRowColumn>05</TableRowColumn>
		  <TableRowColumn>2016-07-08 16:30</TableRowColumn>
		  <TableRowColumn>鬼畜-鬼畜调教</TableRowColumn>
		  <TableRowColumn>【南京外国语学校】师生们真是太鬼畜啦</TableRowColumn>
		  <TableRowColumn>av5250072</TableRowColumn>
		</TableRow>
		<TableRow>
		  <TableRowColumn>06</TableRowColumn>
		  <TableRowColumn>2016-07-08 23:04</TableRowColumn>
		  <TableRowColumn>鬼畜-人力VOCALOID</TableRowColumn>
		  <TableRowColumn>【葛平】【南京外国语学校】中国灵魂 世界胸怀</TableRowColumn>
		  <TableRowColumn>av5255550</TableRowColumn>
		</TableRow>
		<TableRow>
		  <TableRowColumn>07</TableRowColumn>
		  <TableRowColumn>2016-07-10 13:29</TableRowColumn>
		  <TableRowColumn>生活-搞笑</TableRowColumn>
		  <TableRowColumn>【南京外国语学校】我从未见过如此鬼畜的外语老师</TableRowColumn>
		  <TableRowColumn>av5274285</TableRowColumn>
		</TableRow>
		<TableRow>
		  <TableRowColumn>08</TableRowColumn>
		  <TableRowColumn>2016-07-16 23:20</TableRowColumn>
		  <TableRowColumn>生活-日常</TableRowColumn>
		  <TableRowColumn>【南京外国语学校】2016届初中毕业纪念视频（初三版）（老师版）</TableRowColumn>
		  <TableRowColumn>av5363312</TableRowColumn>
		</TableRow>
		<TableRow>
		  <TableRowColumn>09</TableRowColumn>
		  <TableRowColumn>2016-07-19 01:23</TableRowColumn>
		  <TableRowColumn>生活-日常</TableRowColumn>
		  <TableRowColumn>【南京外国语学校】上课的时候突然蹦出来一个窗口</TableRowColumn>
		  <TableRowColumn>av5392765</TableRowColumn>
		</TableRow>
		<TableRow>
		  <TableRowColumn>10</TableRowColumn>
		  <TableRowColumn>2016-07-19 22:14</TableRowColumn>
		  <TableRowColumn>生活-日常</TableRowColumn>
		  <TableRowColumn>【南京外国语学校】小青青你不能这么暴力！</TableRowColumn>
		  <TableRowColumn>av5404985</TableRowColumn>
		</TableRow>
		<TableRow>
		  <TableRowColumn>11</TableRowColumn>
		  <TableRowColumn>2016-07-20 23:04</TableRowColumn>
		  <TableRowColumn>生活-日常</TableRowColumn>
		  <TableRowColumn>【南京外国语学校】2016届高中毕业典礼视频</TableRowColumn>
		  <TableRowColumn>av5419961</TableRowColumn>
		</TableRow>
		<TableRow>
		  <TableRowColumn>12</TableRowColumn>
		  <TableRowColumn>2016-07-26 21:36</TableRowColumn>
		  <TableRowColumn>生活-搞笑</TableRowColumn>
		  <TableRowColumn>【南京外国语学校】一次资本主义的分赃会议</TableRowColumn>
		  <TableRowColumn>av5507423</TableRowColumn>
		</TableRow>
		<TableRow>
		  <TableRowColumn>13</TableRowColumn>
		  <TableRowColumn>2016-07-28 21:51</TableRowColumn>
		  <TableRowColumn>生活-日常</TableRowColumn>
		  <TableRowColumn>【南京外国语学校】你萎了！</TableRowColumn>
		  <TableRowColumn>av5538855</TableRowColumn>
		</TableRow>
		<TableRow>
		  <TableRowColumn>14</TableRowColumn>
		  <TableRowColumn>2016-07-31 09:30</TableRowColumn>
		  <TableRowColumn>生活-日常</TableRowColumn>
		  <TableRowColumn>【Gentleman】【南京外国语学校】小朱说校园</TableRowColumn>
		  <TableRowColumn>av5574883</TableRowColumn>
		</TableRow>
		<TableRow>
		  <TableRowColumn>15</TableRowColumn>
		  <TableRowColumn>2016-08-15 23:42</TableRowColumn>
		  <TableRowColumn>生活-日常</TableRowColumn>
		  <TableRowColumn>【Cosplay】【16暑期】【含花絮】活动视频</TableRowColumn>
		  <TableRowColumn>av5838219</TableRowColumn>
		</TableRow>
		<TableRow>
		  <TableRowColumn>16</TableRowColumn>
		  <TableRowColumn>2016-08-16 21:35</TableRowColumn>
		  <TableRowColumn>生活-日常</TableRowColumn>
		  <TableRowColumn>【南京外国语学校】你见过如此丧病的可乐广告吗？</TableRowColumn>
		  <TableRowColumn>av5853660</TableRowColumn>
		</TableRow>
		<TableRow>
		  <TableRowColumn>17</TableRowColumn>
		  <TableRowColumn>2016-08-25 01:44</TableRowColumn>
		  <TableRowColumn>鬼畜-人力VOCALOID</TableRowColumn>
		  <TableRowColumn>【金坷垃】【南京外国语学校】中国第一 美国垫底</TableRowColumn>
		  <TableRowColumn>av5995228</TableRowColumn>
		</TableRow>
		<TableRow>
		  <TableRowColumn>18</TableRowColumn>
		  <TableRowColumn>2016-08-26 23:02</TableRowColumn>
		  <TableRowColumn>生活-日常</TableRowColumn>
		  <TableRowColumn>【南京外国语学校】【15P】【持续更新】老师唱歌视频合集</TableRowColumn>
		  <TableRowColumn>av6027047</TableRowColumn>
		</TableRow>
		<TableRow>
		  <TableRowColumn>19</TableRowColumn>
		  <TableRowColumn>2016-08-26 23:19</TableRowColumn>
		  <TableRowColumn>生活-日常</TableRowColumn>
		  <TableRowColumn>【老司机翻车】我竟然当着老师的面放老师的鬼畜</TableRowColumn>
		  <TableRowColumn>av6027301</TableRowColumn>
		</TableRow>
		<TableRow>
		  <TableRowColumn>20</TableRowColumn>
		  <TableRowColumn>2016-08-29 22:16</TableRowColumn>
		  <TableRowColumn>科技-机械</TableRowColumn>
		  <TableRowColumn>【航拍】南京地铁二号线仙鹤门段</TableRowColumn>
		  <TableRowColumn>av6074686</TableRowColumn>
		</TableRow>
		<TableRow>
		  <TableRowColumn>21</TableRowColumn>
		  <TableRowColumn>2016-09-18 09:33</TableRowColumn>
		  <TableRowColumn>科技-趣味科普人文</TableRowColumn>
		  <TableRowColumn>【南外SKYLINE航拍社】航拍集锦1</TableRowColumn>
		  <TableRowColumn>av6328115</TableRowColumn>
		</TableRow>
		<TableRow>
		  <TableRowColumn>22</TableRowColumn>
		  <TableRowColumn>????-??-?? ??:??</TableRowColumn>
		  <TableRowColumn>生活-日常</TableRowColumn>
		  <TableRowColumn>【南京外国语学校】【中英IB学生会竞选】宣传视频</TableRowColumn>
		  <TableRowColumn>av6389101</TableRowColumn>
		</TableRow>
		<TableRow>
		  <TableRowColumn>23</TableRowColumn>
		  <TableRowColumn>????-??-?? ??:??</TableRowColumn>
		  <TableRowColumn>生活-日常</TableRowColumn>
		  <TableRowColumn>【南京外国语学校】lzm是GAY!!!</TableRowColumn>
		  <TableRowColumn>av6403107</TableRowColumn>
		</TableRow>
		<TableRow>
		  <TableRowColumn>24</TableRowColumn>
		  <TableRowColumn>2016-09-24 22:43</TableRowColumn>
		  <TableRowColumn>生活-日常</TableRowColumn>
		  <TableRowColumn>【南京外国语学校】【实拍】中英IB学生会竞选宣传20160922</TableRowColumn>
		  <TableRowColumn>av6403371</TableRowColumn>
		</TableRow>

    </TableBody>
  </Table>
  </div>
);

export default VideoList;
