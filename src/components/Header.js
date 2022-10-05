import React from "react"
import Troll_Face from "../images/troll-face.png"

export default function Header(){
    return(
        <header>
            <img src={Troll_Face} alt="Pure Beauty" className="header-img" />
            <h3 className="header-title-l">Meme Generator</h3>
            <h3 className="header-title-r">React Course - Project 3</h3>
        </header>
    )
}