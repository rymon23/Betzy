import EditUserProfleForm from "./edit_user_profile_form";
import {connect} from 'react-redux';
import { updateUser, fetchAllUsers } from "../../actions/user_actions";
import { getCurrentUser } from "../../util/helpers_util";

const mapStateToProps = (state) => {
    return {
        user: getCurrentUser(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (formData) => dispatch(updateUser(formData)),
        fetchAllUsers: () => dispatch(fetchAllUsers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUserProfleForm);
