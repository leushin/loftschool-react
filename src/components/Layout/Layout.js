import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { children, header, footer } = this.props;
    return (
        <Fragment>
            {this.renderHeader(header)}
            <main className="main main--with-header main--with-footer">
                <SectionTitle className="main__title">Main</SectionTitle>
                {children}
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
