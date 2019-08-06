import React from 'react';
import './mainCss.css';


const SearchText = ()=>{
 
    var _ = require("lodash");
    
    let String = [
        "junsang",
        "test",
        "hello",
    ];
    function textChange(event){
        if(_.find(String,(o)=>{ return o == event.target.value })){
            document.getElementById("resultreturn").innerHTML = "i got it"
        }
        else{
            document.getElementById("resultreturn").innerHTML = "i can't fint it"
        }
    }

    function addText(event){
        let addTextvalue = document.getElementById("addTextInput");
        String.push(addTextvalue.value);
    }

    return(
        <div>
            <input type="text" id="searchTextInput" onChange={textChange}/>
            <p id="resultreturn">return</p>
            <input type="text" id="addTextInput"/>
            <input type="button" id="addTextButton" value="add Text" onClick={addText}/>
        </div>
    )
}    

export default SearchText