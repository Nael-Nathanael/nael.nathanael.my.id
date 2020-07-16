import React from 'react';
import anime from 'animejs/lib/anime.es.js';

export default class AnimeJSPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.handleScroll = this.handleScroll.bind(this);

    }

    handleScroll() {
        function getScrollPercent() {
            var h = document.documentElement,
                b = document.body,
                st = 'scrollTop',
                sh = 'scrollHeight';
            return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
        }
        function getScrollPercentInternal() {
            var h = document.documentElement,
                b = document.body,
                st = 'scrollTop',
                sh = 'scrollHeight';
            return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
        }

        this.state.an.seek(this.state.an.duration * getScrollPercentInternal() / 100)
        document.getElementById("dur").innerText = getScrollPercent();
    }

    componentDidMount() {
        this.setState({
            an: anime({
                targets: '.test',
                translateY: 270,
                delay: function (el, i) { return i * 100; },
                elasticity: 200,
                easing: 'easeInOutSine',
                autoplay: false
            })
        });

        window.onscroll = this.handleScroll;
    }

    render() {
        return (
            <div style={{ width: "100vw", height: "300vh", backgroundColor: "black", padding: "400px, 400px" }} className="p-5">
                <div style={{ width: "20px", height: "20px", backgroundColor: "red", opacity: 0.5, position: "fixed" }} class="test">

                </div>
                <div style={{ width: "20px", height: "20px", backgroundColor: "red", opacity: 0.5, position: "fixed" }} class="test">

                </div>
                <div style={{ width: "20px", height: "20px", backgroundColor: "red", opacity: 0.5, position: "fixed" }} class="test">

                </div>
                <div style={{ width: "20px", height: "20px", backgroundColor: "red", opacity: 0.5, position: "fixed" }} class="test">

                </div>
                <div style={{ width: "20px", height: "20px", backgroundColor: "red", opacity: 0.5, position: "fixed" }} class="test">

                </div>
                <div style={{ width: "20px", height: "20px", backgroundColor: "red", opacity: 0.5, position: "fixed" }} class="test">

                </div>
                <div style={{ width: "20px", height: "20px", backgroundColor: "red", opacity: 0.5, position: "fixed" }} class="test">

                </div>
                <div style={{ width: "20px", height: "20px", backgroundColor: "red", opacity: 0.5, position: "fixed" }} class="test">

                </div>
                <p className="text-white" style={{ position: "fixed", left: "200px" }}>Duration</p>
                <p className="text-white" style={{ position: "fixed", left: "300px" }} id="dur"></p>
            </div>
        )
    }
}