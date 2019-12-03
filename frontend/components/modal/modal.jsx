import React from 'react';
import { connect} from 'react-redux';
import { disableModal } from '../../actions/modal_actions';
import SignupFormContainer from "../session_form/signup_form_container";
import LoginFormContainer from "../session_form/login_form_container";

function Modal({ modal, disableModal }) {
    if (!modal) { return null}
    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={disableModal}>
            <div className="modal-child" onClick={(e) => e.stopPropagation()}>
                { component }
            </div>
        </div> );
}

const mapStateToProps = (state, ownProps) => {
    return { modal: state.ui.modal };
};

const mapDispatchToProps = (dispatch) => {
    return { disableModal: () => dispatch(disableModal()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);