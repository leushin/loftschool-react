import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');
const access = {
    login: 'stu@dent.com',
    pass: '123'
}

class AuthProvider extends PureComponent {
    state = {
        isAuthorized: false,
        authorizeError: null
    }

    authorize = (login, pass) => {
        if (login === access.login && pass === access.pass) {
            this.setState({
                isAuthorized: true,
                authorizeError: null
            });
        } else {
            this.setState({
                isAuthorized: false,
                authorizeError: 'Email или пароль введён не верно'
            });
        }
    }

    logOut = () => {
        this.setState({
            isAuthorized: false,
            authorizeError: null
        });
    }

    render() {
        const { children } = this.props;
        const data = {
            email: access.login,
            isAuthorized: this.state.isAuthorized,
            authorizeError: this.state.authorizeError,
            authorize: this.authorize,
            logOut: this.logOut
        }

        return <Provider value={data}>{children}</Provider>;
    }
}

export { AuthProvider, AuthConsumer };
