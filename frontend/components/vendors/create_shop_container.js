import { connect } from 'react-redux';
import { createStore } from '../../actions/store_actions';
import ShopForm from './shop_form';
import { withRouter } from 'react-router-dom';
// import {fetchAllUsers} from'../../actions/users_actions';

const mapStateToProps = state => {
    const ownerId = state.session.id;
    const shop = { title: '', owner: {id: ownerId}, imageFile: undefined, imageUrl: undefined};
    const errors = state.errors.shop;
    return {
        shop,
        errors
    }
};

const mapDispatchToProps = dispatch => ({
    action: shop => dispatch(createStore(shop)),
    // // fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShopForm));