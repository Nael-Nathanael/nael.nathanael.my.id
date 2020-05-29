import React, { Component } from 'react'

export class ScrollDownButton extends Component {
    render() {
        return (
            <div className="w-100 position-absolute text-center" style={{ height: "100vh" }}>
                <section id="scroll-down-btn" className="custom-button">
                    <a href="#about">
                        <span></span>
                        <span></span>
                        <span></span>
                    Scroll
                </a>
                </section>
            </div>
        )
    }
}

export default ScrollDownButton
