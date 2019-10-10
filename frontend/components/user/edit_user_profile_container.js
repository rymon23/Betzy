import EditUserProfleForm from "./edit_user_profile_form";
import {connect} from 'react-redux';
import { updateUser, fetchAllUsers } from "../../actions/user_actions";
import { selectCurrentUser } from '../../reducers/selector_reducer';

const mapStateToProps = state => ({
    user: selectCurrentUser(state.entities.users, state.session.id)
});

const mapDispatchToProps = dispatch => ({
    updateUser: formData => dispatch(updateUser(formData)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUserProfleForm);
