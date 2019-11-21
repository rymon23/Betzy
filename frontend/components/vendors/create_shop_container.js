import { connect } from 'react-redux';
import { createStore } from '../../actions/store_actions';
import StoreForm from './shop_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    const currentUser = state.session.currentUser;
    const store = { 
        name: `${currentUser.username}'s Shop`,
        owner_id: currentUser.id,
        imageFile: undefined, 
        imageUrl: undefined
    };
    const errors = state.errors.store;
    return {
        store,
        errors
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        action: (store) => dispatch(createStore(store)),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StoreForm));