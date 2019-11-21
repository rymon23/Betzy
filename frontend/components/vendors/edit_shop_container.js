import { connect } from 'react-redux';
import { updateStore, fetchStore } from '../../actions/store_actions';
import StoreForm from './shop_form';
import React from 'react';

const mapStateToProps = (state, ownProps) => {
    const storeId = parseInt(ownProps.match.params.storeId);
    const store = state.entities.stores[storeId];
    const errors = state.errors.store;
    return { 
        store,
        errors
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        action: (formData) => dispatch(updateStore(formData)),
        fetchStore: (id) => dispatch(fetchStore(id)),
    }
};

class EditStoreForm extends React.Component {
    componentDidMount() {
        this.props.fetchStore(this.props.match.params.storeId);
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.storeId !== prevProps.match.params.storeId) {
            this.props.fetchStore(this.props.match.params.storeId);
        }
    };

    render() {
        const { action, store } = this.props;
        if (!store) {
            return (
                <div></div>
            )
        }
        return (
            <StoreForm action={action} store={store} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStoreForm);