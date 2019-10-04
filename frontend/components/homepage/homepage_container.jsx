import { connect } from 'react-redux';

import { logout, login } from '../../actions/session_actions';
import { enableModal } from '../../actions/modal_actions'
import Homepage from './homepage';

const mapStateToProps = ({ session }) => {
  return { currentUser: session.currentUser };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    enableModal: modal => dispatch(enableModal(modal)),
    demoLogin: () => dispatch(login({ user: { username: "username", password: "password" } }))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);