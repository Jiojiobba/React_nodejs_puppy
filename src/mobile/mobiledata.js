
import React from 'react';
import './mobile.css';
// import './contactus.js'

export const carddata1=[
    {
        title:"在线咨询（推荐）",
        content: ()=>{return <div>
            <div className="txt"> 服务时间：9:00-12:00 14:00-18:00（工作日）</div>
            <div  className="txt"> 人工在线咨询，便捷、高效，即时沟通</div>
            </div>},
        btn:()=>{return <div className="button" onClick={()=>{window.open('https://es.echatsoft.com/visitor/pc/chat.html?companyId=12408&echatTag=shouqian')}}>人工在线咨询</div> 
        },
        other:"",
    },
    {
        title:"项目咨询",
        content: ()=>{return <div>
            <div className="txt">服务时间：7 x 24小时</div>
            <div  className="txt"> 1个工作日安排对应区域销售顾问与您联系</div>
            </div>},
        btn:()=>{return <div className="button" onClick={()=>{window.open('http://data.sangfor.net/freetrial/buy-free-pc.v20181109.php')}}>提交项目需求</div> },
        other:""
    },
    {
        title:"电话咨询",
        content: ()=>{return <div>
            <div className="txt"> 服务时间：9:00-12:00 14:00-18:00（工作日）</div>
            <div  className="txt"> 若遇线路繁忙，请选择 <span className="txt-span"onClick={()=>{window.open('https://es.echatsoft.com/visitor/pc/chat.html?companyId=12408&echatTag=shouqian')}}>在线咨询</span> 或 <span  className="txt-span" onClick={()=>{window.open("http://data.sangfor.net/freetrial/buy-free-pc.v20181109.php")}}>项目咨询</span></div>
            </div>},
        btn:"",
        other:()=>{return(<div className="other">400-806-6868</div>)},
    }
]
export const carddata2 =[
    {
        title:"产品购买与咨询",
        txt:"深信服售前客服代表与资深销售顾问联手为您提供专业的购买咨询服务",
        card:"card1",
        cardcontent:[
            {
                title:"即时在线咨询",
                content: ()=>{return <div>
                    <div className="txt"> 免费即时在线咨询，为您解答常见售前问题</div>
                    <div  className="txt"> 服务时间：<span>9:00-12:00 14:00-18:00（工作日）</span></div>
                    </div>},
                btn:()=>{return <div className="button" onClick={()=>{window.open('https://es.echatsoft.com/visitor/pc/chat.html?companyId=12408&echatTag=shouqian')}}>售前在线咨询</div> 
                },
                other:"",
            },
            {
                title:"项目咨询",
                content: ()=>{return <div>
                    <div className="txt">免费一对一项目与解决方案咨询服务</div>
                    <div  className="txt"> 服务时限：1个工作日内为您安排销售顾问</div>
                    </div>},
                btn:()=>{return <div className="button" onClick={()=>{window.open('http://data.sangfor.net/freetrial/buy-free-pc.v20181109.php')}}>立即咨询</div> },
                other:""
            },
            {
                title:"电话咨询",
                content: ()=>{return <div>
                    </div>},
                btn:"",
                other:()=>{return(<div className="other">400-806-6868</div>)},
            }
        ],
        bottom:()=>{return(<div className="bottom">更多购买方式，请查看<span style={{color:"red"}} onClick={()=>{window.open('http://m.sangfor.com.cn/order/contact-way.html')}}>如何购买</span></div>)},
    }
    ,{
        title:"售后与技术支持",
        txt:"",
        card:"card2",
        cardcontent:[
            {
                img:"http://download.sangfor.com.cn/Source/default/20181116/dianhua.png",
                content:()=>{
                    return <div className="small-txt">
                        <div className="font-15">请致电获取7*24小时售后帮助</div>
                        <div> <span className="span-big">400-630-6430</span></div>
                    </div>
                }
            },
            {
                img:"http://download.sangfor.com.cn/Source/default/20181116/online-chat.png",
                content:()=>{
                    return <div className="small-txt">
                        <div className="font-12">智能机器人为您解答售后常见技术问题</div>
                        <div style={{position:"relative",width:"100%",height:"33px"}}> <div className="button" onClick={()=>{window.open('http://bbs.sangfor.com.cn/plugin.php?id=common_plug:online&ref=官网')}}>售后在线咨询</div></div>
                    </div>
                },
            },
        ],
        bottom:""
    }
    ,{
        title:"合作伙伴",
        txt:"深信服致力于建设稳定优质合作伙伴生态体系，欢迎您的加入",
        card:"card1",
        cardcontent:[
            {
                title:"成为销售合作伙伴",
                content: ()=>{return <div>
                    <div className="txt">深信服渠道化市场战略以及全方位的渠道体系支持，期待与您携手</div>
                    </div>},
                btn:()=>{return <div className="button"  onClick={()=>{window.open('http://www.sangfor.com.cn/cooperation/partner-apply.html')}}>立即申请</div> 
                },
                other:"",
            },
            {
                title:"成为供应合作伙伴",
                content: ()=>{return <div>
                    <div  className="txt"> 致力于建设高效、互利共赢的供应商协作体系，与您共谋行业发展</div>
                    </div>},
                btn:()=>{return <div className="button" onClick={()=>{window.open('http://data.sangfor.net/srm/index/SupplyRegsitry.html')}}>立刻申请</div> },
                other:""
            },
        ],
        bottom:""
    }
    ,{
        title:"分支机构",
        txt:"深信服拥有47个国内分支机构与8个国际分支机构，业务覆盖50多个国家和地区",
        card:"card1",
        cardcontent:[
            {
                title:"总部机构",
                content: ()=>{return <div>
                    <div className="txt">您可以查询我们的总部机构详细信息</div>
                    </div>},
                btn:(props)=>{ return <div className="button" onClick={()=>{props.showModal(1) }} >立即查看</div> 
                },
                other:"",
            },
            {
                title:"中国分支机构",
                content: ()=>{return <div>
                    <div className="txt">您可以查询我们的国内分支机构详细信息</div>
                    </div>},
                btn:(props)=>{return <div className="button"onClick={()=>{props.showModal(2) }} >立即查看</div> 
                },
                other:"",
            },
            {
                title:"海外分支机构",
                content: ()=>{return <div>
                    <div className="txt">您可以查询我们的国外分支机构详细信息</div>
                    </div>},
                btn:(props)=>{return <div className="button" onClick={()=>{props.showModal(3) }} >立即查看</div> 
                },
                other:"",
            },
            
            
        ],
        bottom:""
    }
    ,{
        title:"社交媒体",
        txt:"欢迎您关注或者私信深信服科技各社交媒体账号获取最新资讯",
        card:"card3",
        cardcontent:['http://download.sangfor.com.cn/Source/default/20181116/weixin.png'
        ,'http://download.sangfor.com.cn/Source/default/20181116/weibo.png'
        ,'http://download.sangfor.com.cn/Source/default/20181116/linkedin.png'
        ,'http://download.sangfor.com.cn/Source/default/20181116/toutiao.png'],
        bottom:''
    }
    ,{
        title:"其他",
        txt:"",
        card:"card2",
        cardcontent:[
            {
                img:"http://download.sangfor.com.cn/Source/default/20181116/youxiang.png",
                content:()=>{
                    return <div className="small-txt">
                        <div className="font-15">媒体合作、业务意见与建议</div>
                        <div> <span className="span-big">market@sangfor.com.cn</span></div>
                    </div>
                }
            },
            {
                img:"http://download.sangfor.com.cn/Source/default/20181116/zhaopin.png",
                content:()=>{
                    return <div className="small-txt">
                        <div className="font-15">欢迎加入我们</div>
                        <div style={{position:"relative",width:"100%",height:"33px"}}> <div className="button" onClick={()=>{window.open("http://hr.sangfor.com/")}}>人才招聘</div></div>
                    </div>
                }
            },
            {
                img:"http://download.sangfor.com.cn/Source/default/20181116/youxiang.png",
                content:()=>{
                    return <div className="small-txt">
                        <div className="font-15">深信服统一对外电子邮件营销地址</div>
                        <div> <span className="span-big">marketing@edm.sangfor.cn</span></div>
                        <div className="font-15" style={{color:"red"}}>请勿直接发送邮件至该邮箱</div>
                    </div>
                }
            },
            {
                img:"http://download.sangfor.com.cn/Source/default/20181116/youxiang.png",
                content:()=>{
                    return <div className="small-txt">
                        <div className="font-15">网站Bug反馈</div>
                        <div style={{position:"relative",width:"100%",height:"33px"}}> <div className="button" onClick={()=>{window.open('http://uao.so/pc59194c762440l118183')}}>提交网站Bug</div></div>
                    </div>
                }
            },
        ],
        bottom:""
    }
]
