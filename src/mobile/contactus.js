import React from 'react';
import './mobile.css';
import ii from'../logo.svg';
import {carddata2} from './mobiledata.js';
import {domA} from './mobiledata.js';
import {domB} from './mobiledata.js';
import {domC} from './mobiledata.js';


export default class Contactus extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          modal: false,
          modalnum:0
        }
    }
    showModal(num) {
        this.setState({ modal: true, modalnum:num });

        document.body.style.overflow = 'hidden';
        document.body.style.height = '100%';
      }
      closeModal() {
        this.setState({ modal: false,modalnum:0 })
        document.body.style.overflow = 'scroll';
      }

    render() {
    const { modal } = { ...this.state }
        return (
            <div className="contact-container">
                <div className="header">
                    <div>联系我们</div>
                </div>
                <div className="content">
                    {
                       carddata2.map((item,i)=>{
                       if(item.card ==="card1"){
                            return (
                                <div key={i}>
                                <Card1  key={i} {...item} showModal={(num) => { this.showModal(num) }} closeModal={() => { this.closeModal() }} modal={this.state.modal} />
                                 {modal ? <Modal {...item} num={this.state.modalnum} showModal={this.showModal} closeModal={() => { this.closeModal() }} /> : <div />}
                                </div>
                       
                            )
                            
                        }
                      else if(item.card ==="card2"){
                           return <Card2  key={i} {...item}/>

                      }else{
                          return <Card3  key={i} {...item}/>
                      }
             })
}
                </div>
                
            </div>
        )
    }
}
function Modal(props){
    if(props.num === 1){
        return (
        <div className="msk">
              <div className="mskcontent">
              <i className="close_btn" onClick={() => { props.closeModal() }}></i>

                <li>
					<h2>
                            深信服总部
					</h2>
					<p>
                            地址：深圳市南山区学苑大道1001号南山智园A1栋
					</p>
					<p>
                            邮编：518055
                    </p>
                    <p>电话：0755-86627888</p>
                    <p>传真：0755-86627999</p>
                    <p>邮箱：market@sangfor.com.cn</p>
                </li>
                <li>
					<h2>
                            深圳软件园（深圳办）
					</h2>
					<p>
                            地址：深圳市南山区科技中二路深圳软件园12栋501
					</p>
					<p>
                            邮编：518052
                    </p>
                </li>
                <li>
					<h2>
                            中国地区客户服务中心
					</h2>
					<p>
                            客服热线：400-630-6430
					</p>
					<p>
                            电话：0731-88043168
                    </p>
                    <p>传真：0755-86725925</p>
                    <p>邮箱：support@sangfor.com.cn</p>
                    <p>意见反馈专线：0755-86336190</p>
                </li>
                <li>
					<h2>
                            海外客户服务中心
					</h2>
					<p>
                            海外所有地区
					</p>
					<p>
                            电话：0060-0127117129/0060-0127117511
                    </p>
                    <p>
                            邮箱：tech.support@sangfor.com.hk
                    </p>
                </li>
                <li>
					<h2>
                            北京研发中心
					</h2>
					<p>
                            地址：北京市西城区白纸坊东街2号经济日报社A座
					</p>
					<p>
                            邮编：100032
                    </p>
                </li>
                <li>
					<h2>
                            北京分公司
					</h2>
					<p>
                            地址：北京市西城区白纸坊东街2号经济日报社A座
					</p>
					<p>
                            邮编：100032
                    </p>
                </li>
             </div>
        </div>)
    } else if(props.num ===2){
        return (
            <div className="msk">
                <div className="mskcontent">
                <i className="close_btn" onClick={() => { props.closeModal() }}></i>

                <li>
					<h2>
						安徽－合肥
					</h2>
					<p>
						地址：安徽省合肥市政务区怀宁路288号置地广场D座1801室
					</p>
					<p>
						邮编：230061
					</p>
				</li>
			
				<li>
					<h2>
						北京
					</h2>
					<p>
						地址：北京市西城区白纸坊东街2号经济日报社A座
					</p>
					<p>
						邮编：100032
					</p>
				</li>
			
				<li>
					<h2>
						重庆
					</h2>
					<p>
						地址：重庆市渝中区经纬大道333号康德国际5A甲级写字楼2栋9-4
					</p>
					<p>
						邮编：400042
					</p>
				</li>
			
				<li>
					<h2>
						福建－福州
					</h2>
					<p>
						地址：福建省福州市晋安区南平东路98号稻田创业小镇【A5号一鸣楼3层311】
					</p>
					<p>
						邮编：350001
					</p>
				</li>
			
				<li>
					<h2>
						福建－厦门
					</h2>
					<p>
						地址：厦门市思明区厦禾路889号罗宾森广场A1栋玛瑙阁3107室
					</p>
					<p>
						邮编：361000
					</p>
				</li>
			
				<li>
					<h2>
						广东－广州
					</h2>
					<p>
						地址：广州市天河区龙口东路129号龙泽商业大厦1201室
					</p>
					<p>
						邮编：510630
					</p>
				</li>
				<li>
					<h2>
						广东－深圳
					</h2>
					<p>
						地址：深圳市南山区科技中二路深圳软件园12栋501
					</p>
					<p>
						邮编：518052
					</p>
				</li>
				<li>
					<h2>
					</h2>
					<h2>
						广东－佛山
					</h2>
					<p>
						地址：佛山市南海区桂城天安数码城5期B座808
					</p>
					<p>
						邮编：528000
					</p>
				</li>
				<li>
					<h2>
					</h2>
					<h2>
						广东－东莞
					</h2>
					<p>
						地址：东莞市南城区鸿福路希尔顿广场2栋603-604
					</p>
					<p>
						邮编：523000
					</p>
				</li>
				<li>
					<h2>
					</h2>
					<h2>
						广东－珠海
					</h2>
					<p>
						地址：珠海市香洲区凤凰北路2042号农行大厦9楼905室
					</p>
					<p>
						邮编：519000
					</p>
				</li>
				<li>
					<h2>
						广东－中山
					</h2>
					<p>
						地址：中山市东区东苑南路101号大东裕国际中心三座南塔1904-1905室
					</p>
					<p>
						邮编：528400
					</p>
				</li>
			
				<li>
					<h2>
						广西－南宁
					</h2>
					<p>
						地址：南宁市青秀区金湖路26-1号东方国际商务港A座13楼1310
					</p>
					<p>
						邮编：530022
					</p>
				</li>
			
				<li>
					<h2>
						贵州－贵阳
					</h2>
					<p>
						地址：贵州省贵阳市观山湖区长岭南路160号高科一号A栋14楼
					</p>
					<p>
						邮编：550001
					</p>
				</li>
			
				<li>
					<h2>
						甘肃－兰州
					</h2>
					<p>
						地址：甘肃省兰州市城关区雁滩高新开发区陇星大厦1号楼1201/1202
					</p>
					<p>
						邮编：730000
					</p>
				</li>
			
				<li>
					<h2>
						海南－海口
					</h2>
					<p>
						地址：海口市美兰区蓝天路35号名门广场北区A座1208室
					</p>
					<p>
						邮编：570100
					</p>
				</li>
				<li>
					<h2>
						海南－三亚
					</h2>
					<p>
						地址：三亚市吉阳区迎宾路380号卓达巴哈马17B栋1606室
					</p>
					<p>
						邮编：570200
					</p>
				</li>
			
				<li>
					<h2>
						河北－石家庄
					</h2>
					<p>
						地址：石家庄市桥西区裕华路66号海悦国际A座-2807/2808
					</p>
					<p>
						邮编：050000
					</p>
				</li>
				<li>
					<h2>
						河北－唐山（含秦皇岛）
					</h2>
					<p>
						地址：唐山市路北区北新西道中环商务1503
					</p>
					<p>
						邮编：063000
					</p>
				</li>
				<li>
					<h2>
						河北－廊坊
					</h2>
					<p>
						地址：廊坊市广阳区新开路锦绣家园2-1-501
					</p>
					<p>
						<span>邮编：065000</span> 
					</p>
				</li>
				<li>
					<h2>
						河北－保定
					</h2>
					<p>
						地址：河北省保定市复兴路与翠园街交汇处康泰国际2-1215
					</p>
					<p>
						邮编：071000
					</p>
				</li>
				<li>
					<h2>
						河北－邯郸
					</h2>
					<p>
						地址：河北省邯郸市丛台区中央公园二号楼一单元1304
					</p>
					<p>
						邮编：056000
					</p>
				</li>
				<li>
					<h2>
						河北－沧州
					</h2>
					<p>
						地址：沧州市运河区颐和文园11号楼1单元504室
					</p>
					<p>
						邮编：061000
					</p>
				</li>
				<li>
					<h2>
						河北－张家口
					</h2>
					<p>
						地址：张家口市桥东区纬一路奥林星城小区10号楼2单元404
					</p>
					<p>
						邮编：075000
					</p>
				</li>
				<li>
					<h2>
						河北－承德
					</h2>
					<p>
						地址：河北省承德市双桥区武烈路碧达园小区
					</p>
					<p>
						邮编：067000
					</p>
				</li>
				<li>
					<h2>
						河北－邢台
					</h2>
					<p>
						地址：邢台市桥东区天一城南区3栋4单位602室
					</p>
					<p>
						邮编：054000
					</p>
				</li>
			
				<li>
					<h2>
						黑龙江
					</h2>
					<p>
						地址：哈尔滨市道里区爱建路8号510室
					</p>
					<p>
						邮编：150090
					</p>
				</li>
			
				<li>
					<h2>
						河南
					</h2>
					<p>
						地址：河南省郑州市金水区东风路与政七街交叉口恒美商务303
					</p>
					<p>
						邮编：450000
					</p>
				</li>
			
				<li>
					<h2>
						湖北
					</h2>
					<p>
						地址：<span style={{color:"#333333",fontFamily:"Helvetica, Tahoma, Arial,",fontSize:"14px",lineHeight:"22px",whiteSpace:"normal",widows:"1",backgroundColor:"#ffffff"}}>武汉市洪山区文化大道555号融创智谷A6栋5层</span> 
					</p>
					<p>
						邮编：430000
					</p>
				</li>
			
				<li>
					<h2>
						湖南
					</h2>
					<p>
						地址：长沙市高新区文轩路27号麓谷企业广场二期E3栋
					</p>
					<p>
						邮编：410011
					</p>
				</li>
			
				<li>
					<h2>
						辽宁－沈阳
					</h2>
					<p>
						地址：沈阳市皇姑区北陵大街19号A座中汇广场21层2101
					</p>
					<p>
						邮编：110001
					</p>
				</li>
				<li>
					<h2>
						辽宁－大连
					</h2>
					<p>
						地址：<span style={{color:"#333333",fontFamily:"Helvetica, Tahoma, Arial,",fontSize:"14px",lineHeight:"22px",whiteSpace:"normal",widows:"1",backgroundColor:"#ffffff"}}>辽宁省大连市沙河口区中山路594号金玉星海2单元2702</span> 
					</p>
					<p>
						邮编：116000
					</p>
				</li>
			
				<li>
					<h2>
						内蒙古－呼和浩特
					</h2>
					<p>
						地址：内蒙古自治区呼和浩特市赛罕区昭乌达路175号汇商广场A座15楼
					</p>
					<p>
						邮编：010010
					</p>
				</li>
			
				<li>
					<h2>
						宁夏－银川
					</h2>
					<p>
						地址：宁夏回族自治区兴庆区上海东路云开苑18号楼3单元701
					</p>
					<p>
						邮编：750000
					</p>
				</li>
			
				<li>
					<h2>
						云南－昆明
					</h2>
					<p>
						地址：云南省昆明市高新区二环西路220号云南软件园.数码国际A座7楼701
					</p>
					<p>
						邮编：650021
					</p>
				</li>
			
				<li>
					<h2>
						江苏－南京
					</h2>
					<p>
						地址：江苏省南京市秦准区江宁路5号无为文创园D幢B座301
					</p>
					<p>
						邮编：210002
					</p>
				</li>
				<li>
					<h2>
						江苏－苏州
					</h2>
					<p>
						地址：苏州市凤凰街88号4楼
					</p>
					<p>
						邮编：215000
					</p>
				</li>
			
				<li>
					<h2>
						江西－南昌
					</h2>
					<p>
						地址：江西省南昌市红谷滩新区前湖大道慧谷创意产业园二期4栋1004室
					</p>
					<p>
						邮编：330000
					</p>
				</li>
			
				<li>
					<h2>
						吉林－长春
					</h2>
					<p>
						地址：长春市南关区东南湖大路2222号天骄大厦A座2单元2242室
					</p>
					<p>
						邮编：130000
					</p>
				</li>
			
				<li>
					<h2>
						青海－西宁
					</h2>
					<p>
						地址：西宁市西关大街25号20号楼2单元2044室
					</p>
					<p>
						邮编：810001
					</p>
				</li>
			
				<li>
					<h2>
						浙江－杭州
					</h2>
					<p>
						地址：杭州市西湖区万塘路252号计量大厦801
					</p>
					<p>
						邮编：310012
					</p>
				</li>
				<li>
					<h2>
						浙江－宁波
					</h2>
					<p>
						地址：浙江省宁波市海曙区东渡路55号华联写字楼2206室
					</p>
					<p>
						邮编：315000
					</p>
				</li>
				<li>
					<h2>
						浙江－温州
					</h2>
					<p>
						地址：温州市鹿城区车站大道1-2号华盟商务广场2711室
					</p>
					<p>
						邮编：325000
					</p>
				</li>
			
				<li>
					<h2>
						天津
					</h2>
					<p>
						地址：天津市南开区华天道8号海泰信息广场D座612-614室
					</p>
					<p>
						邮编：300000
					</p>
				</li>
			
				<li>
					<h2>
						陕西－西安
					</h2>
					<p>
						地址：西安市高新区沣惠南路泰华金贸6号楼15层1502室
					</p>
					<p>
						邮编：710077
					</p>
				</li>
			
				<li>
					<h2>
						山东－济南
					</h2>
					<p>
						地址：济南市历下区草山岭南路975号金域万科中心1804-1806
					</p>
					<p>
						邮编：250014
					</p>
				</li>
				<li>
					<h2>
						山东－青岛
					</h2>
					<p>
						地址：青岛市台柳路和福州北路交汇万科中心A座12A09
					</p>
					<p>
						邮编：266000
					</p>
				</li>
				<li>
					<h2>
						山东－烟台
					</h2>
					<p>
						地址：烟台市莱山区迎春大街润华大厦北楼1306
					</p>
					<p>
						邮编：264000
					</p>
				</li>
			
				<li>
					<h2>
						上海
					</h2>
					<p>
						地址：上海市普陀区中山北路3323号春之声大厦605
					</p>
					<p>
						邮编：200062
					</p>
				</li>
			
				<li>
					<h2>
						四川－成都
					</h2>
					<p>
						地址：成都市高新区锦城大道666号奥克斯广场B座1907
					</p>
					<p>
						邮编：640041
					</p>
				</li>
			
				<li>
					<h2>
						山西－太原
					</h2>
					<p>
						地址：太原市平阳路50号水龙盛大厦708
					</p>
					<p>
						邮编：030001
					</p>
				</li>
			
				<li>
					<h2>
						西藏－拉萨
					</h2>
					<p>
						地址：<span style={{color:"#333333",fontFamily:"Helvetica, Tahoma, Arial,",fontSize:"14px",lineHeight:"22px",whiteSpace:"normal",widows:"1",backgroundColor:"#ffffff"}}>拉萨市城关区八一路世邦国际花园13号楼A栋508</span> 
					</p>
					<p>
						邮编：850000
					</p>
				</li>
			
				<li>
					<h2>
						新疆－乌鲁木齐
					</h2>
					<p>
						地址：新疆乌鲁木齐市水磨沟区南湖南路133号城建大厦8楼
					</p>
					<p>
						邮编：830063
					</p>
                </li>
                </div>
              
            </div>)
    }else if(props.num ===3){
        return (
       
                <div className="msk">
                    <div className="mskcontent">
                    <i className="close_btn" onClick={() => { props.closeModal() }}></i>
                    <li>
					<h2>
                            客户服务中心：
					</h2>
					<p>
                            +60 12711 7129（7511）
					</p>
                    <h2>
                            电子邮件：
					</h2>
					<p>
                            sales@sangfor.com,marketing@sangfor.com
					</p>
                </li>
                <li>
					<h2>
                            SANGFOR SINGAPORE（新加坡）
					</h2>
					<p>
                            8 Burn Road＃04-09，Trivex，新加坡（369977）。

					</p>
					<p>
                            电话：（+65）6276 9133
                    </p>
                </li>
                <li>
					<h2>
                            香港桑富福香港
					</h2>
					<p>
                            九龙尖沙咀东部科学馆道1号协和广场翠怡中心6楼04室。
					</p>
					<p>
                            电话：（+ 852）3427 9160
                    </p>
                    <p>  传真：（+ 852）3427 9910</p>
                </li>
                <li>
					<h2>
                            SANGFOR INDONESIA
					</h2>
					<p>
                            MD Place 3楼，JI Setiabudi No.7，Jakarta Selatan 12910，Indonesia。
					</p>
					<p>
                            电话：（+62）21 2933 2643
                    </p>
                    <p>
                            传真：（+62）21 2933 2643
                    </p>
                </li>
                <li>
					<h2>
                            SANGFOR MALAYSIA
					</h2>
					<p>
                            第47-10号，林格兰Syed Putra，谷中城，林荫大道办公室，59200吉隆坡，马来西亚。
					</p>
					<p>
                            电话：（+60）3 2201 0192
                    </p>
                    <p>
                            传真：（+60）3 2282 1206
                    </p>
                </li>
                <li>
					<h2>
                            SANGFOR泰国
                    </h2>
                    <p>
                            6楼，518/5 Maneeya中心大楼，Ploenchit Road，Lumpini，Patumwan，曼谷，泰国10330
					</p>
					<p>
                            电话：（+66）22517700
					</p>
					<p>
                            传真：（+66）22517700
                    </p>
                </li>
                <li>
					<h2>
                            SANGFOR越南
                    </h2>
                    <p>
                            OTX2-0327区，洪洪区阮湖涛27号日出城。7，越南胡志明市。
                    </p>
					<p>
                            电话：（+84）28 62700133
					</p>
                </li>
                <li>
					<h2>
                            SANGFOR越南
                    </h2>
                    <p>
                            OTX2-0327区，洪洪区阮湖涛27号日出城。7，越南胡志明市。
                    </p>
					<p>
                            电话：（+84）28 62700133
					</p>
                </li>
                <li>
					<h2>
                            SANGFOR菲律宾
                    </h2>
                    <p>
                            7A，OPL大楼，唐卡洛斯·帕兰卡（Don Carlos Palanca），莱加斯比（Legazpi），马卡迪（Makati），100，菲律宾马尼拉122。
                    </p>
					<p>
                            电话：+63（0）9175081344
					</p>
                </li>
                <li>
					<h2>
                            SANGFOR PAKISTAN
                    </h2>
                    <p>
                            D203，海军住房计划，巴基斯坦卡拉奇ZamZamma
                    </p>
					<p>
                            电话：+92 3142288929
					</p>
                </li>
                <li>
					<h2>
                            桑格福德中东
                    </h2>
                    <p>
                            C-80（C翼），阿联酋迪拜，迪拜硅绿洲总部大楼。
                    </p>
					<p>
                            电话：+ 971-52-9606471
					</p>
                </li>
                <li>
					<h2>
                            SANGFOR USA
                    </h2>
                    <p>
                            2901 Tasman Drive，Suite 107，Santa Clara，USA，USA
                    </p>
					<p>
                            电话：（+1）408 520 7898
                    </p>
                    <p>
                            传真：（+1）408 520 7898
					</p>
                </li>
                <li>
					<h2>
                            SANGFOR ITALY
                    </h2>
                    <p>
                            Sede Legale ed Operativa via E. Berlinguer，9 20834 Nova Milanese MB Italia
                    </p>
					<p>
                            电话：+393400616767
                    </p>
                </li>
                    </div>
                </div>
                
      )
    }else {
        props.closeModal();
    }
}
function Card1(props){
    
return(
    <div className="Card1box">
       
      <div className="card1">
          <div className="title">
              <div className="titleleft"></div>
              <div><p> {props.title}</p></div> 
          </div>
          <div className="txt">
              <li> {props.txt}</li>
          </div>
          {
              props.cardcontent.map((item,i)=>{
                  return <div key={i} className="smallcard">
                       <div className="title">{item.title}</div>
                       {
                           item.content?item.content():<div></div>
                       }
                      {item.btn ? <div style={{position:"relative" , margin:"10px 0",height:"33px",width:"100%"}} target="_blank" > {item.btn(props)}</div> : item.other()}
                      {/* onClick={() => { props.showModal(i+1) }} */}
                  </div>
              })
          }
          <div>
              {props.bottom? props.bottom():<div></div>}
          </div>
      </div>
    </div>
)
}

function Card2(props){
    return(
    <div className="Card2box">
         <div className="title">
              <div className="titleleft"></div>
              <div><p> {props.title}</p></div> 
          </div>
          <div className="txt">
               {props.txt?<li>{props.txt}</li>: <div></div>}
            </div>
          <div className="card2">
              {
                  props.cardcontent.map((item,i)=>{
                      return <div  key={i} className="smallcard">
                           <div className="small-img"><img src={item.img} /></div>
                               {item.content()}
                      </div>
                  })
              }
          </div>
          {/* <div>
              {props.bottom? <div>{props.bottom()}</div>:<div></div>}
          </div> */}
    </div>
    )

}

function Card3(props){
    return(
    <div className="Card3box">
         <div className="title">
              <div className="titleleft"></div>
              <div><p> {props.title}</p></div> 
          </div>
          <div className="txt">
               {props.txt?<li>{props.txt}</li>: <div></div>}
            </div>
          <div className="card3">
              <div  className="smallcard">
              {
                  props.cardcontent.map((item,i)=>{
                      return  <div   key={i} className="small-img"><img src={item} /></div>
                  })
              }
                  </div>

          </div>
          {/* <div>
              {props.bottom? <div>{props.bottom()}</div>:<div></div>}
          </div> */}
    </div>
    )

}
