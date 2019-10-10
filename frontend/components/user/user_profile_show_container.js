import { connect } from 'react-redux';
import UserProfileShow from './user_profile_show';
import { getCurrentUser } from "../../util/helpers_util";
import { currentUserHasStore, selectCurrentUserStore } from '../../reducers/selector_reducer';
import { fetchAllUsers } from '../../actions/user_actions';
import { fetchStores } from '../../actions/store_actions';

const mapStateToProps = (state, ownProps) => {
    const storeId = currentUserHasStore(getCurrentUser(state));
    let store;
    if (Boolean(storeId)){
        store = selectCurrentUserStore(state.entities.shops, storeId)
    }
    return {
        user: state.entities.users[ownProps.match.params.userId],
        store
    }
}

const mapDispatchToProps = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchStores: () => dispatch(fetchStores())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileShow);