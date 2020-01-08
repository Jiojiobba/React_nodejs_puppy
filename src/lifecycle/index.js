import React from 'react';
import SearchTree from './searchTree';
import SearchTable from './table';
import { articleList } from './article'
import './smzq.css';

const imgArr = {
    "sm-loupe": "sm-loupe",
    "sm-loupe-white": "sm-loupe-white",
    "sm-menulogo1": "sm-menulogo1",
    "sm-menulogo2": "sm-menulogo2",
    "sm-menulogo3": "sm-menulogo3",
    "sm-menulogo4": "sm-menulogo4",
    "sm-menu-down": "sm-menu-down",
    "sm-menu-right": "sm-menu-right"
}
const menulogo = Object.keys(imgArr).map(item => require("../images/" + item + ".png"));
const contenttxt = [
    {
        content: "尊敬的用户:",
        name: "txtbig",
        isp: false,
    },
    {
        content: "您好！",
        name: "txtsmall",
        isp: true,
    },
    {
        content: "深信服XXX产品一直致力于实现上网可视可控，帮助用户构建高效、合规、安全的上网环境。随着网络环境不断变化，互联网 htpps加密流量占比超过一半，终端违规接入、越权访问、数据泄密等内部威胁层出不穷，为此深信服将重磅推出新一代XXX产品 Neo 架构，创新推出 https 加密流量全识别、内部威胁感知等新技术，并于xxx年xxx月正式发布xxxxx管理 xxxx12.0.30。",
        name: "txtsmall",
        isp: true,
    },
    {
        content: "根据评估，XXX年 X 月 X 日前采购的深信服xxxxx设备由于硬件平台较老、CPU 使用寿命损耗等原因，将无法平滑升级至新一代xxxxx架构。为保障用户网络业务的正常运作，深信服xxxxxx软件从 xxx12.0.30 新版本起，将不再支持在xxx 年 xx 月 xx 日前采购的设备上进行软件升级，因此对您造成的不便，敬请谅解！此次策略调整不影响“应用识别&URL 库”升级服务，您仍然可以正常购买、使用该服务。",
        name: "txtsmall",
        isp: true,
    },
    {
        content: "感谢您对本次产品策略调整的理解，如果您对新一代XXXX产品感兴趣，可以咨询深信服的销售代表或合作伙伴，通过深信服“以旧换新”优惠政策，将正在使用的旧XXXXX产品升级更换为全新的产品。再次感谢您一直以来的支持！真诚地希望本次调整能为您的网络业务安全带来帮助！",
        name: "txtsmall",
        isp: true,
    },
    {
        content: "深信服科技股份有限公司",
        name: "txtbig txtright",
        isp: false,
    },
    {
        content: "2019年10月2日",
        name: "txtbig txtright",
        isp: false,
    }
];

export default class LifeCycle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentArticleList: articleList,
            showDetail: false
        }
    }
    changeArticleList = (newList) => {
        this.setState({ currentArticleList: newList })
    }
    goToListDetail = (component) => {
        this.setState({ showDetail: true })
    }
    closeListDetail = () => {
        this.setState({ showDetail: false })
    }
    render() {
        const { currentArticleList, showDetail } = { ...this.state }
        return (
            <div>
                <Title />
                <div className="sm-container">
                    <Menu showDetail={showDetail} closeListDetail={this.closeListDetail} currentArticleList={currentArticleList} changeArticleList={this.changeArticleList} />
                    <ContentRight showDetail={showDetail} goToListDetail={this.goToListDetail} closeListDetail={this.closeListDetail} currentArticleList={currentArticleList} changeArticleList={this.changeArticleList} />
                </div>
            </div>
        )
    }
}
// 右边内容区域（搜索公告页面）
class ContentRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        }
    }
    componentDidMount(){ 
        //组件挂载时候，注册keypress事件
        document.addEventListener('keypress',this.handleEnterKey)
    }
    componentWillUmount(){
       //组件卸载时候，注销keypress事件
       document.removeEventListener("keypress",this.handleEenterKey)
    }
    handleEnterKey = (e) => {
        if(e.keyCode === 13){ //主要区别就是这里，可以直接获取到keyCode的值
             this.searchTable()
        }
    }
    inputChange = (e) => {
        this.setState({ inputValue: e.target.value })
    }
    searchTable = () => {
        this.props.changeArticleList(articleList.filter(item => item.title.includes(this.state.inputValue)))
    }
    render() {
        const { inputValue } = { ...this.state }
        const { showDetail } = { ...this.props }
        return (
            showDetail ? <Content closeListDetail={() => { this.props.closeListDetail() }} /> :
                <div className="sm-contentbox2">
                    <ContentSearchInput inputValue={inputValue} inputChange={this.inputChange} searchTable={this.searchTable} />
                    <ContentTxt />
                    <SearchTable currentArticleList={this.props.currentArticleList} goToListDetail={this.props.goToListDetail} />
                </div>
        )
    }
}

// 无状态组件
const ContentSearchInput = (props) => {
    const { searchTable, inputValue, inputChange } = { ...props }
    return (
        <div className="sm-contentsearch">
            <input type="text" placeholder="搜索范围：产品生命周期公告" value={inputValue} onChange={inputChange} />
            <div onClick={searchTable} className="sm-search-button" >
                搜索
             <img src={menulogo[1]} />
            </div>
        </div>
    )
}

function ContentTxt() {
    return (
        <div className="sm-contenttxt">
            尊敬的用户：<br />
            更新换代是产品发展的普遍规律。深信服科技遵从着这一规律建立了产品生命周期管理方案，明确产品生命周期策略及产品终止策略。我们将深信服科技的产品生命周期终止策略在此公告，以提高您对深信服产品未来演进方向的可预知性，提早做好业务准备。谢谢！
        </div>
    )
}

function Menu() {
    return (
        <div className="sm-menu">
            <div className="sm-productname">
                产品名称
            </div>
            <div className="sm-search" >
                <SearchTree />
            </div>
        </div>
    )
}
// 右边内容区域默认公告页面
function Content(props) {
    return (
        <div className="sm-contentbox">
            <a style={{ float: 'right' }} onClick={() => { props.closeListDetail() }}>返回列表</a>
            {
                contenttxt.map((items, index) => {
                    return (
                        <div key={index} className={items.name}>
                            {items.isp ? <div style={{ width: '40px', height: '10px', display: 'inline-flex' }}></div> : <div></div>}
                            {items.content}
                        </div>
                    )
                })
            }

            {/* return(<div className={item.name}> {item.content} </div>) */}

        </div>
    )
}
const Title = () => {
    return (
        <div className="slideBox">
            <div>
                <ul>
                    <li style={{height:'390px', background: '#1786c8 url(http://download.sangfor.com.cn/Uploads/%E5%91%A8%E6%9C%9F%E5%85%AC%E5%91%8A_02.jpg) no-repeat center top' }}>
                    </li>
                </ul>
            </div>
        </div>
    )
}