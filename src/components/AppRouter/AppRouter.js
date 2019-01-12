import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Home from '../Home';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList/OutboxList';
import classnames from 'classnames';
import styles from './AppRouter.module.css';

const ROUTES = [
    {
        title: "Home",
        link: "/app",
        nameClass: classnames(styles.link, 't-link-home')
    },
    {
        title: "Inbox",
        link: "/app/inbox",
        nameClass: classnames(styles.link, 't-link-inbox')
    },
    {
        title: "Outbox",
        link: "/app/outbox",
        nameClass: classnames(styles.link, 't-link-outbox')
    },
];

class AppRouter extends Component {
    render () {
        return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <nav className={styles.nav}>
                        <ul className={classnames(styles.navList, 't-nav-list')}>
                        {
                            ROUTES.map(item => (
                                <li className={styles.navElement} key={item.link}>
                                    <Link className={item.nameClass} aria-current="page" to={item.link}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))
                        }
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/app" component={Home} />
                        <Route path="/app/inbox" component={InboxList} />
                        <Route path="/app/outbox" component={OutboxList} />
                        <Redirect from="*" to="/app" />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default AppRouter;