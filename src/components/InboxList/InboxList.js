import React, { Component } from 'react';
import { withData } from '../../context/Data';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import InboxMail from '../InboxMail';
import classnames from 'classnames';
import styles from './Inbox.module.css';

class InboxList extends Component {
  render () {
    const { data, match } = this.props;

    return (
        <div className={styles.content}>
            <h3 className={styles.title}>Inbox</h3>
            <div className={classnames(styles.container, 't-inbox-list')}>
                <Switch>
                    <Route
                        exact
                        path={`${this.props.match.path}/`}
                        render={props =>
                            data.inbox.map(item => (
                                <Link
                                    className={styles.link}
                                    key={item.id}
                                    to={`${match.url}/${item.id}`}
                                >
                                    {`${item.body.substring(0, 50)}...`}
                                </Link>
                            ))
                        }
                    />
                    <Route
                        path={`${match.path}/:id`}
                        component={InboxMail}
                    />
                    <Redirect to="/app/inbox"/>
                </Switch>
            </div>
        </div>
    );
  }
}

export default withData(InboxList);
