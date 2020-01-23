import React, { Component } from 'react'

export default class Random extends Component {
    render() {
        const min = this.props.min;
        const max = this.props.max;
        const random = min + Math.floor(Math.random() * Math.floor(max));
        return (
            <div className="random"><p>Random value between {min} and {max} => {random}</p></div>
        )
    }
}
