import React , { Component } from 'react';
import './mainCss.css'


const ImgLoader = ()=>{
    function FileRead(event){
        let input = event.target;
        let reader = new FileReader();
        reader.onload = function(){
          let dataURL = reader.result;
          let output = document.getElementById('LoadImg');
          output.src = dataURL;
        };
        reader.readAsDataURL(input.files[0]); 
    }
    return(
        <div id="FileLoadDiv">
            <input type="file" accept=".jpg,.jpeg,.png" id="Filereader" onChange={FileRead}/>
            <img src="" alt="error" id="LoadImg"/>
        </div>
    )
}

export default ImgLoader

