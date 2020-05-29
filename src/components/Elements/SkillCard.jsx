import React, { Component } from 'react'

export class SkillCard extends Component {
    render() {
        return (
            <div className="section-content">
                <img
                    src={this.props.src}
                    alt={this.props.alt}
                    width={this.props.width ? this.props.width : "100px"}
                    height={this.props.height ? this.props.height : "100px"}
                    data-place={this.props.placement ? this.props.placement : "bottom"}
                    data-effect="solid"
                    data-border={true}
                    data-multiline={true}
                    data-background-color="black"
                    data-tip={this.props.tooltip}
                />
                <p className="text-center text-white">
                    {this.props.text}
                </p>
            </div>
        )
    }
}

export default SkillCard
