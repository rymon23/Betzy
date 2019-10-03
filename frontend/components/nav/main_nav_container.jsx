import { connect } from 'react-redux';
import React from 'react'

import { logout, login } from '../../actions/session_actions';
import { enableModal } from '../../actions/modal_actions'
import MainNav from './main_nav';

const mapStateToProps = ({ session, entities: { users } }) => {
    return { currentUser: users[session.id] };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        enableModal: modal => dispatch(enableModal(modal)),
        demoLogin: () => dispatch(login({ user: { username: "username", password: "password" } }))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(MainNav);