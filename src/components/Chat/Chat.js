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
        if (event.key === 'Enter' && event.target.value !== '') {
            this.setState(oldState => ({
                messages: [...oldState.messages, { text: oldState.messageInput }],
                messageInput: ''
            }));
        }
    }
    
    render () {
        return (
            <div className="chat">
                <div class="message-list">
                    <div class="messages">
                    {
                        this.state.messages.map((message, ndx) => {
                            return (
                                <span key={message.text + ndx} class="message">
                                    <Message text={message.text}/>
                                </span>
                            );
                        })
                    }
                    </div>
                </div>
                <input value={this.state.messageInput} onChange={this.changeInputMessage} onKeyPress={this.sendMessageOnEnter} className="input-message"/>
            </div>
        );
    }
}

export default Chat;