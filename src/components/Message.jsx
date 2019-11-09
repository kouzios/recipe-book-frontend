import React, { Component } from 'react'

class Message extends Component {
    render() {
        return (
            <span style={{"color":this.props.color}}>
                { this.props.message }
            </span>
        )
    }
}

export default Message;