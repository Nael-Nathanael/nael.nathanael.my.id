import React, { Component } from 'react'

export class Aesir extends Component {
    render() {
        return (
            <div className="fullscreen bg-black position-absolute">
                <iframe src={process.env.PUBLIC_URL + "/aesir.html"} className="w-100 h-100" frameBorder="0" title="aesir cytus bg"></iframe>
            </div>
        )
    }
}

export default Aesir
