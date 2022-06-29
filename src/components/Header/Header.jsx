import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/icons/nike-react.svg';
import {ReactComponent as ShoppingCart} from '../../assets/icons/shopping-cart.svg'
import {ReactComponent as Favorites} from '../../assets/icons/favorite.svg'
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/User/UserActions'
import ReactDOM from 'react-dom';
import './Header.css';


function Header(props) {

const {numberOfProducts,user,logout,numbarOfFavorites} = props;

  return (

    <header className="border-bottom mb-3">

      <div className='header container container-min-max-width d-flex justify-content-between align-items-center'>
      
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div id="login d-flex">
        
          {user
            ? <p>Salut, {props.user.displayName}!</p>
            : null
          }

          {
            user 
            ? 
            <div className='logged-in d-flex'>
              <button className='logout' onClick={()=>logout()}>Delogare</button>
              <Link style={{textDecoration:'none',color:'red',fontWeight:'lighter'}} to='/favorites'>
                <Favorites id='cart'/>
                <sup>{numbarOfFavorites}</sup>
              </Link>
              <Link style={{textDecoration:'none',color:'red',fontWeight:'lighter'}} to='/cart'>
                <ShoppingCart id='cart'/>
                <sup>{ numberOfProducts }</sup>
              </Link>
            </div>
            :
            <div>
            <Link style={{textDecoration:'none',color:'inherit'}} to="/login">Logare</Link>
            <Link style={{textDecoration:'none',color:'red',fontWeight:'lighter'}}  onClick={()=>openLoginModal()} to='#'>
              <Favorites id='cart'/>
              <sup>{numbarOfFavorites}</sup>
            </Link>
            <Link style={{textDecoration:'none',color:'red',fontWeight:'lighter'}} to='/cart'>
                <ShoppingCart id='cart'/>
                <sup>{ numberOfProducts }</sup>
              </Link>
            </div>
          }
    
        </div>

      </div>

    </header>
  )
}

function openLoginModal(){
  let element = document.querySelector('.modala');
  ReactDOM.findDOMNode(element).style.visibility = 'visible';
}

function mapStateToProps(state){
  return{
      numberOfProducts: state.cart.products.length,
      user: state.user.data,
      numbarOfFavorites: state.favorites.products.length,
  }
}

function mapDispatchToProps(dispatch){
    return{
      logout: ()=> dispatch(logoutUser()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);