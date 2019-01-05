import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';
import LoginForm from '../LoginForm';

class Layout extends PureComponent {
  render() {
    const { header, footer } = this.props;
    return (
        <Fragment>
            {this.renderHeader(header)}
            <main className="main main--with-header main--with-footer">
                <SectionTitle className="main__title">Main</SectionTitle>
                <LoginForm/>
            </main>
            {this.renderFooter(footer)}
        </Fragment>
    );
  }

  renderHeader(HeaderChild) {
    return <HeaderChild/>;
  }

  renderFooter(FooterChild) {
    return <FooterChild/>;
  }
}

export default Layout;
