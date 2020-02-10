import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Icon, Modal } from 'antd';
import isOnline from 'is-online';
import Toaster from 'simple-react-toast';
import routes from './Routes';

class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      network: null,
    };
  }

  componentDidMount() {
    isOnline().then(network => this.setState({ network: network ? null : false }));
    window.addEventListener('online', (event) => {
      this.setState({
        network: event.type === 'online',
      });
    });
    window.addEventListener('offline', (event) => {
      this.setState({
        network: event.type !== 'offline',
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
      this.props.closeAuthPopup && this.props.closeAuthPopup();
      Modal.destroyAll();
    }
  }

  render() {
    const { network } = this.state;
    const text = network === null ? '' : network ? (
      <span>
        <Icon type="check-circle" className="toast-icon" />
        {' '}
You are online now.
      </span>
    ) : (
      <span>
        <Icon type="poweroff" className="toast-icon" />
        {' '}
You are offline now.
      </span>
    );
    return (
      <div>
        {this.props.children}
        <Toaster message={text} />
      </div>
    );
  }
}

export default withRouter(ScrollToTop);
