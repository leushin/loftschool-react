import React, { Component } from 'react';

class Mail extends Component {
    render () {
        const { type, from, to, body } = this.props;

        return (
            <React.Fragment>
                <p className={`t-mail-${type}`}>
                    {type}: <b>{from || to}</b>
                </p>
                <p className="t-mail-body">{body}</p>
            </React.Fragment>
        );
    }
}

export default Mail;
