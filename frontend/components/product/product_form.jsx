import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { categoryOptions, errorsList, imgProductShow} from '../../components/utility';

class ProductForm extends React.Component {
    constructor(props){
        super(props);

        // this.state = Object.assign({}, {
        //     imageUrls: [],
        //     imageFiles: [],
        //     store_id,
        //     category_id,
        // }, this.props.product);
        this.state = this.props.product;
        this.state.imageUrls = [];
        this.state.imageFiles = [];
        debugger

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleClearAll = this.handleClearAll.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append('product[name]', this.state.name);
        formData.append('product[description]', this.state.description);
        formData.append('product[category_id]', this.state.category_id);
        formData.append('product[store_id]', this.state.store_id);
        formData.append('product[price]', this.state.price);

        if (this.state.id){
            formData.append('product[id]', this.state.id);
        }
        let {imageFiles} = this.state;
        
        if (imageFiles.length > 0) {
            for (let i = 0; i < imageFiles.length; i++) {
                formData.append('product[images][]', imageFiles[i]);
            }
        }
        
        this.props.action(formData).then(action => {
            this.props.history.push(`/stores/${this.state.store_id}/products/${action.product.id}`)
        });
    }

    handleFile(event){
        event.preventDefault();
        if (this.state.imageFiles.length === 5 || this.state.imageUrls.length === 5) {
            alert('You have attached the maximum number of images');
            return;
        }

        let files = Array.from(event.target.files)
        let length = files.length;
        if (length < 5) {
            for (let i = 0; i < length; i++){
                let fileReader = new FileReader();
                fileReader.onloadend = () => {
                    this.setState({
                        imageFiles: [...this.state.imageFiles, files[i]],
                        imageUrls: [...this.state.imageUrls, fileReader.result]
                    })
                };
                fileReader.readAsDataURL(files[i])
            }
        } else if (length === 5){
            for (let i = 0; i < 5; i++) {
                let fileReader = new FileReader();
                fileReader.onloadend = () => {
                    this.setState({
                        imageFiles: [...this.state.imageFiles, files[i]],
                        imageUrls: [...this.state.imageUrls, fileReader.result]
                    })
                };
                fileReader.readAsDataURL(files[i])
            }
        } else {
            alert('Number of files exceeded, upload 5 pictures only!');
            return;
        }
    }

    update(field) {
        return (event) => {
            debugger
            this.setState({[field]: event.target.value});
        }
    }

    handleClearAll(event){
        event.preventDefault();
        return this.setState({imageFiles: [], imageUrls: []});
    }

    render(){

        let { categories, errors, keywords, product } = this.props;

        debugger

        const previews = this.state.imageUrls.map(url => {
            return (
                <img key={url} src={url}/>
            );
        });
        
        if (!errors){
            return <div></div>
        }

        // const categoryOptions = () => {
        //     if (!categories.length) return null;
        //     return (
        //         <select value={this.state.categoryId || ''} 
        //             id="category" 
        //             onChange={this.update('category_id')}>

        //             {categories.map((category) => {
        //                 return (
        //                   <option value={category.id}>
        //                     {category.name}
        //                   </option>
        //                 )}
        //             )}
        //         </select>)
        //     }

        const keywordOptions = () => {
            if (!keywords.length) return null;
            return (
                <select value={this.state.categoryId || ''} 
                    id="category" 
                    onChange={this.update('category_id')}>

                    {categories.map((category) => {
                        return (
                          <option value={category.id}>
                            {category.name}
                          </option>
                        )}
                    )}
                </select>)
            }

        return (
            <div>
                <h2>Create New Product</h2>
                <form onSubmit={this.handleSubmit} className="product-form">

                    {errorsList(errors)}

                    <div className="product-images">
                        <h3>Photos</h3>

                        <div>
                            {previews}
                        </div>
                        {/* {imgProductShow(product.imageUrls[0])} */}

                        <div className="images-input-button">
                            <button onClick={this.handleClearAll}>Clear all</button>
                            <input type="file" onChange={this.handleFile} multiple />
                            <p>Upload images</p>
                        </div>
                    </div>

                    <div className="listing-details">
                        <h3>Listing details</h3>
                        <br/>

                        <div className="title">
                            <div className="label-description">
                                <label htmlFor="title">Title *</label>
                            </div>
                            
                            <input required type="text" value={this.state.name || ''} id="title" onChange={this.update('name')} />
                        </div>

                        <div className="description">
                            <div className="label-description">
                                <label htmlFor="description">Description *</label>
                                <p>
                                    product description...
                                </p>
                            </div>
                            
                            <textarea id="description" value={this.state.description || ''} onChange={this.update('description')} cols="30" rows="10"></textarea>
                        </div>

                        <div className="category">

                            <div className="label-description">
                                <label htmlFor="category">Category *</label>
                                <p>Pick a category for your product</p>
                            </div>
                                
                            {/* {categoryOptions()} */}
                            {categoryOptions(categories, this.update('category_id'), product.category_id ? product.category_id : null) }
                        </div>
                        
                    </div>
                

                    <div className="inventory-pricing">
                        <h3>Inventory and pricing</h3>

                        <div className="price">

                            <div className="label-description">
                                <label htmlFor="price">Price *</label>
                            </div>

                            <input required type="number" 
                                id="price" 
                                value={this.state.price || ''} 
                                onChange={this.update('price')} 
                                min="0.00" 
                                step="0.01"/>
                        </div>
                    </div>

                    {/* <div className="sticky-bar"> */}
                    <div className="flex-row">
                        <Link to={`/stores/${this.state.store_id}`}
                            className="clickable button-save-cancel">
                            Cancel
                        </Link>
                        <button className="clickable button-save-cancel">Save and continue</button>
                    </div>
                    
                </form>
            </div>

        );
    }
};

export default withRouter(ProductForm);