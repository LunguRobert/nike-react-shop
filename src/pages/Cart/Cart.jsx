import React from 'react'
import Layout from '../../components/Layout'
import { connect } from 'react-redux'
import { removeFromCart } from '../../redux/Cart/CartActions';
import { Link } from 'react-router-dom';
import './Cart.css'


function Cart(props) {

    const {products,removeFromCartInjected} = props;

    const totalSum = (products) => {
            return products.reduce((acc, product) => {
                return acc + product.quantity * product.price;
            }, 0)
        }

  return (

        <Layout>

           <div className="cart-page container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center">
                {
                    props.products.length
                    ? <div className="w-100">
                        <div className="d-flex justify-content-between text-center h4">
                            <p className="w-25">Produs</p>
                            <p className="w-25">Pret</p>
                            <p className="w-25">Cantitate</p>
                            <p className="w-25">Total</p>
                        </div>
                    {
                        products.map((products,index)=>{
                            return(

                                <div key={index} className="d-flex justify-content-between align-items-center text-center">
                                    <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                                    <img src={products.image} alt="Produs"/>
                                    <p>{ products.name }</p>
                                    </div>
                                    <p className="w-25">{ products.price } { products.currency }</p>
                                    <p className="w-25">{ products.quantity }</p>
                                    <div className="w-25 d-flex justify-content-center">
                                    <p className="mr-2">{ products.price * products.quantity } { products.currency }</p>
                                    <button className='close-button' onClick={()=>{
                                        removeFromCartInjected({
                                            product:{
                                                id:index,
                                            }
                                        })
                                    }}>
                                        <i className="bi bi-x-lg"></i>
                                    </button>
                                    </div>
                                </div>
                                
                            )
                        })
                    }
                    <div className="d-flex justify-content-end border-top">
                            <div className="w-25 d-flex align-items-center justify-content-center">
                                <p className="my-4 text-center font-weight-bold">Total de plată: </p>
                            </div>
                            <div className="w-25">
                                <p className="my-4 text-center">
                                    { totalSum(products) } { products[0].currency }
                                </p>
                            </div>
                        </div>
                        </div>
                :  <div className="d-flex flex-column align-items-center">
                        <p className="h3">Nu ai produse în coș!</p>
                        <Link to="/"><button className="btn btn-outline-dark">Inapoi la home</button></Link>
                    </div>
                    
                }
           </div>

       </Layout>

  );

}

function mapStateToProps(state){

    return{
        products: state.cart.products,
    }

}

function mapDispatchToProps(dispatch){

    return{
        removeFromCartInjected: (payload)=> dispatch(removeFromCart(payload))
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);