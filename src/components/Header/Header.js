import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button'
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
            <header className="header">
                <p className="header__title section-title">Header</p>
                <div className="header__content">
                    <AuthConsumer>
                    {
                        ({ isAuthorized, logOut, email }) => (
                            isAuthorized && (
                                <div class="header-menu">
                                    <p class="header-menu__email header-email t-header-email">
                                        {email}
                                    </p>
                                <Button
                                class="header-menu__button t-logout"
                                onClick={logOut}
                                >
                                Выйти
                                </Button>
                            </div>
                            )
                        )
                    }
                    </AuthConsumer>
                </div>
            </header>
    );
  }
}

export default Header;
