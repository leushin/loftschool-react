import React from "react";
import Message from "../Message/Message";

class Chat extends React.Component {
    state = {
        messageInput: '',
        messages: []
    }

    changeInputMessage = event => {
        this.setState({
            messageInput: event.target.value
        });
    }

    sendMessageOnEnter = event => {
        if (event.key === 'Enter') {
            this.setState(oldState => ({
                messages: [...oldState.messages, { text: oldState.messageInput }],
                messageInput: ''
            }));
        }
    }
    
    render () {
        return (
            <div className="chat">
                {
                    this.state.messages.map((message, ndx) => <Message key={message.text + ndx} text={message.text}/>)
                }
                <input value={this.state.messageInput} onChange={this.changeInputMessage} onKeyPress={this.sendMessageOnEnter} className="input-message"/>
            </div>
        );
    }
}

export default Chat;