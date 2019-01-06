import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');
const access = {
    login: 'stu@dent.com',
    pass: '123'
}

class AuthProvider extends PureComponent {
    state = {
        email: 'stu@dent.com',
        isAuthorized: false,
        authorizeError: ''
    }

    authorize = (login, pass) => {
        if (login === access.login && pass === access.pass) {
            this.setState({
                isAuthorized: true,
                authorizeError: ''
            });
        } else {
            this.setState({
                isAuthorized: false,
                authorizeError: 'Email или пароль введён не верно'
            });
        }
    }

    logout = () => {
        this.setState({
            isAuthorized: false,
            authorizeError: ''
        });
    }

    getProviderValue = () => {
        return {
            email: this.state.email,
            isAuthorized: this.state.isAuthorized,
            authorizeError: this.state.authorizeError,
            authorize: this.authorize,
            logout: this.logout
        }
    }

    render () {
        const { children } = this.props;

        return <Provider value={this.getProviderValue()}>{children}</Provider>;
    }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
