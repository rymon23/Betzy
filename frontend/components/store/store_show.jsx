import React from "react";
import { withRouter } from "react-router-dom";

class StoreShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchStore(this.props.match.params.storeId);
    this.props.fetchProducts();
  }

  componentDidUpdate(){

  }

  update(field) {
    return (e) =>
      this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    debugger
    let { currentUserId, store, products } = this.props;
    const CLASS_NAME_HEAD = "store-show";

    const productList = products.map((product) => {
      return (
        <li key={product.id} className="prodict-li">
          <div className="product-div">
            <h3 className="product-header">{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
        </li>)
    });

    return (
      <div className={`${CLASS_NAME_HEAD}-container`}>
        <div className={`${CLASS_NAME_HEAD}-head`}>
          <h2>{ store.name }</h2> 
          <h3>Owner: { store.owner.username }</h3>
        </div>
        <div className={`${CLASS_NAME_HEAD}-product-div`} >
          <h3>Products</h3>
          <ul className={`${CLASS_NAME_HEAD}-product-ul`}>
            { productList }
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(StoreShow);