import React from 'react'
import './mainCss.css'

class ThirdHomeWork extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            visibility : "hidden",
            toggle : false,
            result : "선택하세요",
        }
    }

    ButtonClick = ()=>{
        if(!this.state.toggle){
            this.setState({
                visibility :"visible",
                toggle:true,
            })
        }
        else{
            this.setState({
                visibility:"hidden",
                toggle:false,
            })
        }
    }

    OptionClick1 = () =>{
        if(this.state.toggle){
            let result = document.querySelectorAll(".dropDownItems p")[0].innerHTML;
            this.setState({
                visibility : "hidden",
                toggle:false,
                result : result,
            })
        }
    }

    OptionClick2 = ()=>{
        if(this.state.toggle){
            let result = document.querySelectorAll(".dropDownItems p")[1].innerHTML;
            this.setState({
                visibility : "hidden",
                toggle:false,
                result : result,
            })
        }
    }

    render(){
        return(
            <div id="dropDownDiv">
                <div id="dropDownButton" onClick={this.ButtonClick}>
                    <div id="resultDiv">
                        <p id="resultText">{this.state.result}</p>
                    </div>
                    <i class="DropDownIcon"></i>
                </div>
                <div class="dropDownItems" onClick={this.OptionClick1} style={{visibility : this.state.visibility}}>
                    <p>red team</p>
                </div>
                <div class="dropDownItems" onClick={this.OptionClick2} style={{visibility : this.state.visibility}}>
                    <p>blue team</p>
                </div>
            </div>
        )
    }
}

export default ThirdHomeWork;