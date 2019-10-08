import {connect} from 'react-redux';
import UserProfileShow from './user_profile_show';
import { currentUserHasShop, selectCurrentUserShop } from '../../reducers/selectors';
import { fetchAllUsers } from '../../actions/users_actions';
import {fetchStores} from '../../actions/shops_actions';

const mapStateToProps = (state, ownProps) => {
    const storeId = currentUserHasShop(state.session.id, state.entities.users);
    let store;
    if (Boolean(storeId)){
        shop = selectCurrentUserShop(state.entities.shops, storeId)
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