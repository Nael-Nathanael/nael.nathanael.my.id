import React, { Component } from 'react'

export class ScrollDownButton extends Component {
    render() {
        return (
            <div className="fullscreen position-absolute text-center">
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
