import React from "react"
import ReactDOM from "react-dom"

let i = 0;
let pictures = document.getElementsByClassName("picture");

function slideShow(){
    if (i < pictures.length) {
        i++
    } else {
        i = 0
    }
    setTimeout(slideShow, 1000);
}
