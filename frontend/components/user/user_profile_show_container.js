import { connect } from 'react-redux';
import UserProfileShow from './user_profile_show';
import { getStoreId } from "../../util/helpers_util";
import { currentUserHasStore, selectCurrentUserStore } from '../../reducers/selector_reducer';
import { fetchAllUsers, updateUser } from '../../actions/user_actions';
import { fetchStores } from '../../actions/store_actions';

const mapStateToProps = (state, ownProps) => {
    const user = state.entities.users[ownProps.match.params.userId];
    const storeId = getStoreId(user);
    let store;
    debugger
    if (Boolean(storeId)){
        store = selectCurrentUserStore(state.entities.stores, storeId);
    };
    return {
        currentUser: state.session.currentUser,
        user: state.entities.users[ownProps.match.params.userId],
        store
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchStores: () => dispatch(fetchStores()),
        updateUser: (formData) => dispatch(updateUser(formData))        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileShow);