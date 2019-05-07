import React from 'react';
import { connect } from 'react-redux';
import actions from '../../store/actions';
import store from '../../store';

export default mapStateToProps => WrappedComponent => {
  const ConnectedWrappedComponent = connect(
    mapStateToProps,
    actions
  )(WrappedComponent);
  return props => <ConnectedWrappedComponent store={store} {...props} />;
};
