import React from 'react';
import axios from 'axios'
import './App.css';

const imgsrcArr = {
  "logo1": "logo1",
  "logo2": "logo2",
  "logo3": "logo3",
  "logo4": "logo5",
  "logo5": "logo5",
  "logo6": "logo6",
}
const logoarr = Object.keys(imgsrcArr).map(item => require("./images/" + item + ".png"));
const Cardinfo = [
  {
    'title': '智能客服',
    'imgsrc': logoarr[0],
    'content': ['即问即答，迅速回复', '智能快捷的解决咨询问题', '与深信服工程师实时在线交流'],
    'sumary': '在线咨询',
    'href': 'http://bbs.sangfor.com.cn/plugin.php?id=common_plug:online&ref=%E5%AE%98%E7%BD%91'
  },
  {
    'title': '深信服社区',
    'imgsrc': logoarr[1],
    'content': ['用户手册、排查文档、案例库、软件工具等，全面的资源获取平台', '零距离对话技术大牛'],
    'sumary': '论坛链接',
    'href': 'http://bbs.sangfor.com.cn'
  },
  {
    'title': '微信公众号',
    'imgsrc': logoarr[2],
    'content': ['服务进展可视', '在线提交问题', '多样化的自助服务'],
    'sumary': '绑定设备送服务 详情',
    'href': 'http://bbs.sangfor.com.cn/forum.php?mod=viewthread&tid=80127&highlight=#/'
  },
  {
    'title': '技术服务热线',
    'imgsrc': logoarr[3],
    'content': [' 7*24小时远程支持', ' 故障排查、设备调优', '疑难问题处理'],
    'sumary': '400-630-6430 或 0731-89770400',
    'href': '#'
  },
  {
    'title': '技术支持邮箱',
    'imgsrc': logoarr[4],
    'content': ['非紧急问题咨询', '服务建议或意见反馈'],
    'sumary': 'support@sangfor.com.cn',
    'href': '#'
  },
  {
    'title': '现场服务',
    'imgsrc': logoarr[5],
    'content': ['资深技术工程师快速上门支撑', '技术方案交流设计', '关键时刻现场保障'],
    'sumary': '全国区域办事处',
    'href': ''
  },
]
const NavList = [
  '服务咨询',
  '设备咨询',
  '返修咨询',
]
const ServerList = [
  {
    Q1: '拨打400选择远程服务时，要输入的服务号是什么？',
    A: '在签订服务合同时，由用户自行提供手机号或座机号作为服务号，再由我司市场部统一申请开通。'
  },
  {
    Q2: '怎查询自己的服务号是多少?',
    A: '通过智能客服进行人工查询，或拨打4006306430选择3，进入【已购设备服务有效期查询或服务续费咨询】专线进行查询。'
  },
  {
    Q3: '技术服务热线（4006306430）的免费咨询能提供远程服务吗？',
    A: '免费咨询主要是提供简单问题的咨询服务，原则上不提供远程服务。'
  },
  {
    Q4: '技术服务热线的远程服务工单怎么查询进度和当前处理人？',
    A1: '关注【深信服技术服务】微信公众号，在【个人中心】-【服务查询|提单】中可实时查询问题处理进展等服务信息；',
    A2: '通过智能客服进行人工查询，或拨打400联系工程师人工查询。'
  },
  {
    Q5: '深信服技术服务中心的电话为什么是长沙的号码？',
    A: '深信服国内的技术服务中心位处长沙，呼出的号码都是区号为0731的座机号。'
  }
];

const DeviceList = [
  {
    Q1: '怎么查看自己设备的型号？',
    A1: '一般在设备面板上有标注，如AC1200、AD2000等；',
    A2: '联系经销商或拨打售后服务热线4006306430进行查询。'
  },
  {
    Q2: '设备编码（SN）是什么？在哪里查看？',
    A: '设备编码是设备唯一标识符，一般在设备面板的侧面或者背面，由一串5开头8位或10位的数字组成。',
  },
  {
    Q3: '如何查询设备的服务过期时间？',
    A1: '关注【深信服技术服务】微信公众号，在【个人中心】-【维保|维修查询】-【服务有效期】中输出网关序号进行查询；',
    A2: '拨打售后服务热线4006306430选择3，进入【已购设备服务有效期查询或服务续费咨询】专线进行查询。'
  }
];
const RepairList = [
  {
    Q1: '设备硬件故障了，需要返修怎么办？',
    A: '拨打售后服务热线400306430后选择2，进入【硬件问题和返修查询】专线进行报修。'
  },
  {
    Q2: '设备返修了，怎么查询返修状态？',
    A1: '关注【深信服技术服务】微信公众号，在【个人中心】-【维保|维修查询】中输入返修单号或网关序号进行查询。',
    A2: '登录深信服社区，在【自助服务】-【返修查询】中输入返修单号或网关序号进行查询。',
    A3: '通过智能客服进行人工查询，或拨打售后服务热线400306430后选择2，进入【硬件问题和返修查询】专线进行查询。'
  }
]

// 6个卡片
function Card(props) {
  return (
    <div className='Card-container'>
      <div className="Cardrow">
        {Cardinfo.map((item, index) => {
          if (index < 3) {
            return (
              <Cardcontent key={index} item={item} showModal={props.showModal} closeModal={() => { props.closeModal() }} />
            )
          }
        })
        }
      </div>
      <div className="Cardrow">
        {Cardinfo.map((item, index) => {
          if (index > 2) {
            return (
              <Cardcontent key={index} item={item} showModal={props.showModal} closeModal={() => { props.closeModal() }} />
            )
          }
        })
        }
      </div>
    </div>
  );
}
// 6个卡片字体内容
function Cardcontent(props) {
  const item = props.item;
  const contentArr = item.content;

  return (
    <div className='Card'>
      <div className='Card-logo img-hover' style={{ position: 'relative' }}>
        <img src={item.imgsrc} className="Card-img" alt="logo" />
        {item.title === "微信公众号" ? <div className="wxcode"></div> : <div />}
      </div>

      <div className="Card-contentbox">
        <div className="Card-title">
          {item.title}
        </div>
        <div className='Card-content'>
          {
            contentArr.map((item, index) => {
              return (
                <li key={item}>{item}</li>
              )
            })
          }
        </div>
      </div>
      {
        item.href ? <a href={item.href} target="_blank" className='Card-sumary'>
          {item.sumary}
        </a> : <a onClick={() => { !item.href && props.showModal() }} target="_blank" className='Card-sumary'>
            {item.sumary}
          </a>
      }
      <a onClick={() => { !item.href && props.showModal() }} target="_blank" className='Card-sumary'>
        {item.sumary}
      </a>
    </div>
  )
}


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nativeNav: '服务咨询',
      modal: false,
      navToList: {
        '服务咨询': this.getServerList,
        '设备咨询': this.getDeviceList,
        '返修咨询': this.getRepairList,
      }
    };
  }
  carNav = (nav) => {
    this.setState({
      nativeNav: nav
    })
  }
  showModal() {
    this.setState({ modal: true })
  }
  closeModal() {
    this.setState({ modal: false })
  }
  getServerList = () => {
    return ServerList.map((item, i) => <ServiceQA key={i} arr={item} {...item} />)
  }
  getDeviceList = () => {
    return DeviceList.map((item, i) => <DeviceQA key={i} arr={item}  {...item} />)
  }
  getRepairList = () => {
    return RepairList.map((item, i) => <RepairListQA key={i} arr={item}  {...item} />)
  }

  render() {
    const { nativeNav, navToList, modal } = { ...this.state }
    return (
      <div className="App">
        <Card showModal={() => { this.showModal() }} closeModal={() => { this.closeModal() }} modal={this.state.modal} />
        <Nav nativeNav={nativeNav} selectNav={this.carNav} />
        {
          navToList[nativeNav]()
        }
        {modal ? <NetLoginForServiceContactModal showModal={this.showModal} closeModal={() => { this.closeModal() }} /> : <div />}
      </div>

    );
  }
}

//菜单栏
const Nav = (props) => {
  return (
    <div className="Nav">
      {
        NavList && NavList.map((item, index) => {
          return (
            <div key={index} className='Navv'>
              <div key={index} onClick={() => { props.selectNav(item) }} className={props.nativeNav === item ? "Nav-son Active" : 'Nav-son'}>
                {item}
              </div>
            </div>

          )
        })
      }
    </div>
  );
}
const ServiceQA = (props) => {
  return (
    <div className='QArow'>
      {
        Object.keys(props.arr).map((item, index) => {
          var qa = item.substr(0, 1);
          return (
            <div key={index} className={qa === 'Q' ? 'Question' : 'Answer'}>
              {item + ": "}{props.arr[item]}
            </div>
          )

        })
      }

    </div>
  )
}
const DeviceQA = (props) => {

  return (
    <div className='QArow'>
      {
        Object.keys(props.arr).map((item, index) => {
          var qa = item.substr(0, 1);
          return (
            <div key={index} className={qa === 'Q' ? 'Question' : 'Answer'}>
              {item + ": "}{props.arr[item]}
            </div>
          )

        })
      }

    </div>
  )
}
const RepairListQA = (props) => {

  return (
    <div className='QArow'>
      {
        Object.keys(props.arr).map((item, index) => {
          var qa = item.substr(0, 1);
          return (
            <div key={index} className={qa === 'Q' ? 'Question' : 'Answer'}>
              {item + ": "}{props.arr[item]}
            </div>
          )

        })
      }
    </div>
  )
}

// export class NetLoginForServiceContactModal extends React.Component {
//   state = {
//     inputValue: '',
//     isLogin: false,
//   }
//   checkInput() {
//     // 请求发出
//     if (this.state.inputValue) {
//       let reg = /^\d{8}$/
//       if (reg.test(this.state.inputValue)) {
//         this.setState({
//           msg: '',
//           isLogin: true
//         })
//       } else {
//         this.setState({
//           msg: '请输入8位数字'
//         })
//       }
//     } else {
//       this.setState({
//         msg: '输入不能为空！'
//       })
//     }
//   }
//   onChange(e) {
//     if (e && e.target) {
//       this.setState({
//         inputValue: e.target.value,
//         msg: '',
//       })
//     }
//   }
//   render() {
//     const { msg, inputValue, isLogin } = { ...this.state }
//     return (
//       <div>
//         <div className="pc_msk"></div>
//         <div className="modal_box">
//           {
//             !isLogin ? <div className="title">
//               <span>输入设备网关ID可获取联系方式</span>
//               <i className="pc_close_btn" onClick={() => { this.props.closeModal() }}></i>
//               <div className="net_inputBox">
//                 <input value={inputValue} onChange={(e) => { this.onChange(e) }} className='net_input' type="text" maxLength="8" placeholder="网关序号（8位）" />
//                 <div style={{ color: 'red', height: '30px', width: '100%' }}>{msg}</div>
//                 <button onClick={() => { this.checkInput() }} className="net_btn">查询</button>
//               </div>
//             </div> : <div className="title">
//                 <span>查询结果</span>
//                 <i className="pc_close_btn" onClick={() => { this.props.closeModal() }}></i>
//                 <div className="net_inputBox">
//                   <ModalContent />
//                 </div>
//               </div>
//           }
//         </div>
//       </div>
//     );
//   }
// }

// class ModalContent extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       phoneValue: ''
//     }
//   }
//   onChange(e) {
//     this.setState({
//       phoneValue: e.target.value
//     })
//   }
//   render() {
//     const phoneValue = this.state.phoneValue
//     return (
//       <div style={{ lineHeight: '30px' }}>
//         <ul>
//           <li>产品名称：M5100-AC-I</li>
//           <li>服务商名称：深信服科技</li>
//           <li>服务电话：400-630-6430</li>
//         </ul>
//         <div style={{fontSize: '12px'}}>
//           <span style={{ color: 'red', fontSize: '12px' }}>查看各办事处原厂技术服务接口人联系方式:&nbsp;</span>
//           <select onChange={(e) => { this.onChange(e) }}>
//             <option value="">请选择区域</option><option value="18139660341">新疆</option>
//             <option value="18095445360">兰州</option>
//             <option value="17797173030">青海</option>
//             <option value="1775231092">宁夏</option>
//             <option value="18749459699">河南</option>
//             <option value="18640435989">沈阳</option>
//             <option value="13998621050">大连</option>
//             <option value="18604464499">长春</option>
//             <option value="15566033644">哈尔滨</option>
//             <option value="17722423639">深圳</option>
//             <option value="13360532837">珠海</option>
//             <option value="18575217173">惠州</option>
//             <option value="15632313122">河北</option>
//             <option value="18947965437">内蒙</option>
//             <option value="18035105965">山西</option>
//             <option value="18581299175">天津</option>
//             <option value="18155107516">安徽</option>
//             <option value="18749459699">郑州</option>
//             <option value="18662713443 ">南京</option>
//             <option value="15190075230">苏州</option>
//             <option value="13980463643">成都</option>
//             <option value="18627579771">西藏</option>
//             <option value="18950416849">福州</option>
//             <option value="18650005282">厦门</option>
//             <option value="17753140632">济南</option>
//             <option value="15318840127">青岛</option>
//             <option value="13517483467 ">湖南</option>
//             <option value="15578881390">广西</option>
//             <option value="15595712408">海南</option>
//             <option value="18691885836">陕西</option>
//             <option value="18664834490">广州</option>
//             <option value="18566638836">东莞</option>
//             <option value="18072845317">浙江</option>
//             <option value="18621329690">上海</option>
//             <option value="18618418878">北京</option>
//             <option value="18556516227">北京总部</option>
//             <option value="18607916551">江西</option>
//             <option value="18672923367">湖北</option>
//             <option value="13368809978">云南</option>
//             <option value="18677159636">广西</option>
//             <option value="18502355311">重庆</option>
//           </select>
//         </div>
//         <span style={{ color: 'blue', paddingLeft: '20px' }}>{phoneValue}</span>
//       </div>)
//   }
// }

export class NetLoginForServiceContactModal extends React.Component {
  // props.closeModal()
  // props.closeModal()
  state = {
      inputValue: '',
      isLogin: false,
  }
  checkInput() {
      // 请求发出
      if (this.state.inputValue) {
          let reg = /^[0-9a-zA-Z]{8}$/
          if (reg.test(this.state.inputValue)) {
              this.setState({
                  msg: '',
                  isLogin: true
              })
          } else {
              this.setState({
                  msg: '请输入8位数字或字符'
              })
          }
      } else {
          this.setState({
              msg: '输入不能为空！'
          })
      }
  }
  onChange(e) {
      if (e && e.target) {
          this.setState({
              inputValue: e.target.value,
              msg: '',
          })
      }
  }
  render() {
      const { msg, inputValue, isLogin } = { ...this.state }
      return (
          <div>
              <div className="pc_msk"></div>
              <div className="modal_box">
                  {
                      !isLogin ? <div className="title">
                          <span>输入设备网关ID可获取联系方式</span>
                          <i className="pc_close_btn" onClick={() => { this.props.closeModal() }}></i>
                          <div className="net_inputBox">
                              <input value={inputValue} onChange={(e) => { this.onChange(e) }} className='net_input' type="text" maxLength="8" placeholder="网关序号（8位）" />
                              <div style={{ color: 'red', height: '30px', width: '100%' }}>{msg}</div>
                              <button onClick={() => { this.checkInput() }} className="net_btn">查询</button>
                          </div>
                      </div> : <div className="title">
                              <span>查询结果</span>
                              <i className="pc_close_btn" onClick={() => { this.props.closeModal() }}></i>
                              <div className="net_inputBox">
                                  <ModalContent inputValue={inputValue}/>
                              </div>
                          </div>
                  }
              </div>
          </div>
      );
  }
}

class ModalContent extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          phoneValue: '',
          error: false,
          pdName:'',
          cti_channame:'',
          cit_chanphone:''

      }
  }
  componentDidMount() {
      const _this=this
      axios.get(`http://svr.sangfor.com.cn:88/svrstate_json.php?svrid=${this.props.inputValue}`).then(resdata => {
          console.log(resdata.data.data[0])
          if (resdata && resdata.data) {
              const data = resdata.data.data[0]
              _this.setState({
                  pdName: data.pdName,
                  cti_channame: data.cti_channame,
                  cit_chanphone: data.cit_chanphone,
                  // cit_day2_rb: data.cit_day2_rb,
                  // cti_day2_800: data.cti_day2_800,
                  // cti_day2_up: data.cti_day2_up,
                  // rid: data.rid,
                  // rnum: data.rnum,
              })
          }
      }).catch(err => {
          console.error(err)
          _this.setState({ error: true })
      })
  }
  onChange(e) {
      this.setState({
          phoneValue: e.target.value
      })
  }
  render() {
      const phoneValue = this.state.phoneValue
      const { pdName, cit_chanphone, cti_channame, error } = { ...this.state }
      return (error?<div style={{color:'red'}}>网络请求有误，请检查网关输入是否正确。</div>:<div style={{lineHeight:'30px'}}>
              <ul>
                  <li>产品名称：{pdName}</li>
                  <li>服务商名称：{cti_channame}</li>
                  <li>服务电话：{cit_chanphone}</li>
              </ul>
              <div style={{color:'red',fontSize:'12px'}}>
                  <span>查看各办事处原厂技术服务接口人联系方式:&nbsp;</span>
                  <select onChange={(e)=>{this.onChange(e)}}>
                      <option value="">请选择区域</option><option value="18139660341">新疆</option>
                      <option value="18095445360">兰州</option>
                      <option value="17797173030">青海</option>
                      <option value="1775231092">宁夏</option>
                      <option value="18749459699">河南</option>
                      <option value="18640435989">沈阳</option>
                      <option value="13998621050">大连</option>
                      <option value="18604464499">长春</option>
                      <option value="15566033644">哈尔滨</option>
                      <option value="17722423639">深圳</option>
                      <option value="13360532837">珠海</option>
                      <option value="18575217173">惠州</option>
                      <option value="15632313122">河北</option>
                      <option value="18947965437">内蒙</option>
                      <option value="18035105965">山西</option>
                      <option value="18581299175">天津</option>
                      <option value="18155107516">安徽</option>
                      <option value="18749459699">郑州</option>
                      <option value="18662713443 ">南京</option>
                      <option value="15190075230">苏州</option>
                      <option value="13980463643">成都</option>
                      <option value="18627579771">西藏</option>
                      <option value="18950416849">福州</option>
                      <option value="18650005282">厦门</option>
                      <option value="17753140632">济南</option>
                      <option value="15318840127">青岛</option>
                      <option value="13517483467 ">湖南</option>
                      <option value="15578881390">广西</option>
                      <option value="15595712408">海南</option>
                      <option value="18691885836">陕西</option>
                      <option value="18664834490">广州</option>
                      <option value="18566638836">东莞</option>
                      <option value="18072845317">浙江</option>
                      <option value="18621329690">上海</option>
                      <option value="18618418878">北京</option>
                      <option value="18556516227">北京总部</option>
                      <option value="18607916551">江西</option>
                      <option value="18672923367">湖北</option>
                      <option value="13368809978">云南</option>
                      <option value="18677159636">广西</option>
                      <option value="18502355311">重庆</option>
                  </select>
                  <span style={{color:'blue',paddingLeft:'20px'}}>{phoneValue}</span>
              </div>
          </div>)
}
}