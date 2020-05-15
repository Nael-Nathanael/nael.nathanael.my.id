import React, { Component } from 'react'

export class Avatar extends Component {
    render() {
        return (
            <img src={process.env.PUBLIC_URL + "/images/avatar.jpeg"}
                height={this.props.height}
                width={this.props.width}
                alt="avatar"
                className={this.props.className} />
        )
    }
}

export default Avatar
