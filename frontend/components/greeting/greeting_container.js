import { connect } from 'react-redux'
import {logout} from '../../actions/session_actions';
import Greeting from './greeting';
import { enableModal } from'../../actions/modal_actions';

const mapStateToProps = (state) => {    
    return {
        currentUser: state.session.currentUser
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    enableModal: modal => dispatch(enableModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);