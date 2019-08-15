import React , {useState} from 'react';
import './mainCss.css'



const StyledCheckBox = ()=>{
    const [ checkBoxvisibility , setCheckBox ] = useState("hidden");
    const [ CheckBoxToggle , setCheckBoxToggle ] = useState("off")
    const [ radioVisibility , setRadio] = useState("hidden");
    const [ radioToggle , setRadioToggle ] = useState("off");
    return(
        <div id="StyledComponents">
            <div>
                <div id="StyledCheckBox" onClick={
                    ()=>{
                        if(CheckBoxToggle === "off"){
                            setCheckBox("visible");
                            setCheckBoxToggle("on")
                        }
                        else{
                            setCheckBox("hidden");
                            setCheckBoxToggle("off")
                        }
                    }
                }>
                    <div id="StyledCheckBoxIconDiv">
                        <span id="StyledCheckBoxIcon" style={{visibility : checkBoxvisibility}}>✔</span>
                    </div>
                    <div>
                        <span>{CheckBoxToggle}</span>
                    </div>
                </div>
            </div>

            <div id="StyledRadioDiv">
                <div id="StyledRadio" onClick={
                    ()=>{
                        if(radioToggle === "off"){
                            setRadio("visible");
                            setRadioToggle("on");
                        }
                        else{
                            setRadio("hidden");
                            setRadioToggle("off");
                        }
                    }
                }>
                    <div id="StyledRadioIcon" style={{visibility : radioVisibility}}></div>
                </div>
                <div>
                    <span>{radioToggle}</span>
                </div>

            </div>
        </div>
    )
}

export default StyledCheckBox

