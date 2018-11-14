import React, { Component } from "react";
import { string } from "prop-types";

const left: any = "left";

const g0vbar = {
    background: "#343A40"
}

const g0vbarLinkStyle = {
    textDecoration: "underline",
    color: "white",
}

const g0vbarImg = {
    marginRight: "10px",
}

export interface Props {
    width: string;
}

export default function G0vbar(props: Props) {
    const g0vbarContent = {
        color: "white",
        fontSize: "12px",
        paddingTop: "5px",
        paddingBottom: "5px",
        textAlign: left,
        width: props.width,
        marginLeft: "auto",
        marginRight: "auto"
    }
    return (
        <div className="g0vbar" style={g0vbar}>
            <div className="g0vbar-content" style={g0vbarContent}>
                <img src="g0v.ico" />
                這是一個<a style={g0vbarLinkStyle} href="https://hack.g0v.tw">台灣g0v公民科技社群</a>
                開發的網站。
      </div>
        </div>
    );
}
