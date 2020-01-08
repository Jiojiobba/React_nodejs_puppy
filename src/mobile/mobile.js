import React from 'react';
import './mobile.css';
import {carddata1} from './mobiledata.js'

export default class Mobile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
  
    render() {
        return (
            <div className="buy-container">
                <div className="header">
                    <div>如何购买</div>
                    <div>深信服售前客服代表与资深销售顾问联手为您<br />提供专业的购买咨询服务</div>
                    <div className="tip">
                           <div>* 本页面仅受理售前购买咨询{
                            //    ，如需<span >售后</span>帮助，请点击
                           }</div>
                           {/* <div className="tip-button">这里</div> */}
                    </div>
                </div>
                {
                    carddata1.map((item,i) =>{
                        return <Card key={i} {...item}/>
                    })
                }
            </div>
        )
    }
}
// 三张卡片
function Card (props){
    return(
            <div className="content">
            <div className="card">
                <div className="title">{props.title}</div>
                {
                    props.content()
                }
                <div className="buttonbox">
                   {props.btn ?props.btn():props.other()} 
                </div>
                
            </div>
        </div>
        )
}

