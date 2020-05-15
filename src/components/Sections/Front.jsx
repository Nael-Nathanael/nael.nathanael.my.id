import React, { Component } from 'react'
import Avatar from '../Elements/Avatar'

export class Front extends Component {
    render() {
        return (
            <div className="fullscreen bg-black d-flex flex-row justify-content-center align-items-center mb-5">

                {/* Wide Screen Version */}
                <div className="container clearfix front d-none d-md-block">

                    {/* Avatar */}
                    <Avatar height="130px" width="130px" className="float-left avatar mr-4" />
                    {/* Avatar */}

                    {/* Description */}
                    <div className="simple-desc d-flex justify-content-center flex-column">
                        <h2 className="text-uppercase text-white title-text">
                            Nathanael
                        </h2>
                        <h1 className="text-uppercase text-white title-text">
                            I am{" "}
                            <span id="toCycle">
                                Web Developer | Software Engineer
                            </span>
                        </h1>
                    </div>
                    {/* Description */}

                </div>
                {/* Wide Screen Version */}

                {/* <!--Mobile Version--> */}
                <div className="container clearfix front d-md-none d-block text-center">

                    {/* <!--Upper Row--> */}
                    <div className="d-flex justify-content-center align-items-center">
                        {/* Avatar */}
                        <Avatar height="130px" width="130px" className="avatar" />
                        {/* Avatar */}
                    </div>
                    {/* <!--Upper Row End--> */}

                    {/* <!--Lower Row--> */}
                    <div className="row">
                        <div className="col align-items-center">
                            <h2 className="text-uppercase text-white title-text pt-2">Nathanael</h2>
                            <h1 className="text-uppercase text-white title-text">I am<br />
                                <span id="toCycleMobile">
                                    Web Developer | Software Engineer
                                </span>
                            </h1>
                        </div>
                    </div>
                    {/* <!--Lower Row End--> */}

                </div>
                {/* <!--Mobile Version End--> */}

            </div>
        )
    }
}

export default Front
