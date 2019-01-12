import React, { Component } from 'react';
import { withData } from '../../context/Data';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import OutboxMail from '../OutboxMail';
import classnames from 'classnames';
import styles from './Outbox.module.css';

class InboxList extends Component {
  render () {
    const { data, match } = this.props;
    
    return (
        <div className={styles.content}>
            <h3 className={styles.title}>Outbox</h3>
            <div className={classnames(styles.container, 't-outbox-list')}>
                <Switch>
                    <Route
                        exact
                        path={`${this.props.match.path}/`}
                        render={props =>
                            data.outbox.map(item => (
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
                        component={OutboxMail}
                    />
                    <Redirect to="/app/outbox"/>
                </Switch>
            </div>
        </div>
    );
  }
}

export default withData(InboxList);
