import React, { Component } from 'react'

function rgbToHex(r, g, b) {
    const hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    return hex;
  }

export default class BoxColor extends Component {
    render() {
        const { r, g, b } = this.props;

        const divStyle = {
            backgroundColor: `rgb(${r},${g},${b})`,
            border: '2px solid black',
            margin: '10px 150px 10px 30px',
            fontSize: '1.5rem',
            textAlign: 'center',
        };

        console.log(divStyle);
        
        return (
            <div style={divStyle}>
                <p>rgb({r},{g},{b}</p>
                <p>{rgbToHex(r, g, b)}</p>
            </div>
        )
    }
}
