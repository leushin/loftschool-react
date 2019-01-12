import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail';

class OutboxMail extends PureComponent {
  render() {
    const {
      match: {
        params: { id }
      },
      data
    } = this.props;
    const mail = data.outbox.find(mail => mail.id === id);

    return <Mail type="to" {...mail} />;
  }
}

export default withData(OutboxMail);
