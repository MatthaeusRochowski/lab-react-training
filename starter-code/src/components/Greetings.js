import React, { Component } from 'react'

export default class Greetings extends Component {
    render() {
        let greeting;
        switch (this.props.lang) {
            case "de":
                greeting = <p>Hallo {this.props.children}</p>;
                break;
            case "fr":
                greeting = <p>Bonjour {this.props.children}</p>;
                break;
            default:
                greeting = <p>Hi {this.props.children}</p>;
                break;
        }
        return <div className="greetings">{greeting}</div>;
    }
}
