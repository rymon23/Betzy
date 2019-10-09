import React from 'react';
import {withRouter} from 'react-router-dom';

class StoreForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.store;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('store[title]', this.state.title);
        formData.append('store[owner_id]', this.state.owner.id);

        if (this.state.id){
            formData.append('store[id]', this.state.id);
        }

        formData.append('store[owner_id]', this.state.owner.id);

        if (this.state.imageFile) {
            formData.append('store[store_image]', this.state.imageFile);
        }

        this.props.action(formData).then(action => {
            this.props.history.push(`/stores/${action.store.id}`)
        }).then(() => this.props.fetchAllUsers());
        
    }

    update(field) {
        return event => {
            this.setState({[field]: event.target.value});
        };
    }

    handleFile(event) {
        const file = event.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({imageFile: file, imageUrl: fileReader.result});
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    render() {
        const preview = this.state.imageUrl
            ? <img src={this.state.imageUrl}/>
            : null;
        let { errors } = this.props;

        return (
            <form onSubmit={this.handleSubmit} className="shop-form">

                <div className="shop-errors">
                    {errors}
                </div>
                
                <div className="shop-name">
                    <label htmlFor="name">
                        Name your store
                    </label>
                    <br/>
                    
                    <div className="shop-name-input">
                        <input
                            required
                            type="text"
                            value={this.state.title}
                            id="name"
                            onChange={this.update('title')} />
                    </div>
                   
                </div>
                <br/>
                <div className="shop-image-upload">
                    <label htmlFor="shop-image">Add your shop's logo here</label>
                    <br/>

                    <div className="image-preview">
                        {preview}
                    </div>

                    <input type="file" id="shop-image" onChange={this.handleFile}/>
                </div>

                <button className="clicky" id="save-shop">Save and continue</button>

            </form>
        )

    }

}

export default withRouter(StoreForm);