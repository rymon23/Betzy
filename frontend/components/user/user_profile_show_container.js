import { connect } from 'react-redux';
import UserProfileShow from './user_profile_show';
import { getStoreId } from "../../util/helpers_util";
import { currentUserHasStore, selectCurrentUserStore } from '../../reducers/selector_reducer';
import { fetchAllUsers } from '../../actions/user_actions';
import { fetchStores } from '../../actions/store_actions';

const mapStateToProps = (state, ownProps) => {
    const users = state.entities.users;
    const user = state.entities.users[ownProps.match.params.userId];
    const storeId = getStoreId(user);
    let store;
    if (Boolean(storeId)){
        store = selectCurrentUserStore(state.entities.stores, storeId)
    }

    debugger
    return {
        user: state.entities.users[ownProps.match.params.userId],
        store
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchStores: () => dispatch(fetchStores())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileShow);