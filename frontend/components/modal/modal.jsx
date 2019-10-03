import React from 'react';

import { connect} from 'react-redux';
import { enableModal, disableModal } from '../../actions/modal_actions';
import SignupFormContainer from "../session_form/signup_form_container";
import LoginFormContainer from "../session_form/login_form_container";

const modal = ({ modal, disableModal }) => {
    if (!modal) { return null};
    let componentType;
    if (modal === "login"){
        componentType = <LoginFormContainer />;
    }else if (modal === "signup"){
        componentType = <SignupFormContainer />;
    }else {return null};

    return (
        <div className="modal-main" onClick={()=> disableModal}>
            <div className="modal-child" onClick={(e) => e.stopPropagation()}>
                { componentType }
            </div>
        </div> );
};


const mapStateToProps = (state, ownProps) => {
    return { modal: state.ui.modal };
};

const mapDispatchToProps = (dispatch) => {
    return { disableModal: () => dispatch(disableModal()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(modal);