import React from 'react';
import './mainCss.css'



const StyledCheckBox = ()=>{

    return(
        <div id="StyledCheckBoxDiv">
            <input type="checkbox" id="realCheckBox"/>
            <label id="fakeCheckBox" htmlFor="realCheckBox">
                <span id="fakeCheckBoxImg">✔</span>
            </label>
            <span id="CheckBoxChecker"></span>
        </div>
    )
}

export default StyledCheckBox

