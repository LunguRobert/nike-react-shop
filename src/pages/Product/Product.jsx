import React, { Component } from 'react'
import Layout from '../../components/Layout'
import products from '../../utils/products.json'
import { connect } from 'react-redux';
import { addToCart } from '../../redux/Cart/CartActions'
import './Product.css';


export class Product extends Component {

    constructor(props){
        super(props);
        this.state={
            product:{},
        }
    }

    componentDidMount(){

        const urlParameter = this.props.match.params.productID;
        const categoryValues = Object.values(products);
        
        let currentProduct;
        categoryValues.forEach((category)=>{
            const findResult = category.items.find((item)=>{
                return urlParameter == item.id;
            })
            if(findResult!==undefined){
                currentProduct = findResult;
            }
        })
        this.setState({product: currentProduct})
    }

    
  render() {

    const {name, image,id,price,currency,size,colour,material,brand,description} = this.state.product;
    const {addToCart} = this.props;

    return (
        <Layout>
                <div className="product-page container container-min-max-width">
                    <h1 className="my-5 h2">{name}</h1>
                    <div className="product-info d-flex">
                        <div className="image-wrapper d-flex mr-5">
                            <img src={image} alt="Product presentation"/>
                        </div>
                        <div className="product-details">
                            <p className="h3 text-danger">{price} {currency}</p>
                            <button
                                className="btn btn-dark mb-4 font-weight-bold"
                                onClick={() => {
                                        addToCart({
                                            product: {
                                            id,
                                            name,
                                            price,
                                            currency,
                                            image
                                        }
                                    })
                                }}
                            >
                                Adaugă în coș
                            </button>
                            <p><span className="font-weight-bold">Mărime</span>: {size}</p>
                            <p><span className="font-weight-bold">Culoare</span>: {colour}</p>
                            <p><span className="font-weight-bold">Material</span>: {material}</p>
                            <p><span className="font-weight-bold">Brand</span>: {brand}</p>
                            <p className="font-weight-bold mb-1">Descriere:</p>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </Layout>
    )
  }
}


function mapDispatchToProps(dispatch){

    return {
        addToCart: (payload) => dispatch(addToCart(payload)),
    };
    
}

export default connect(null,mapDispatchToProps)(Product);