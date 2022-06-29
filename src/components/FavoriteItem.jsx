import React from 'react'
import { connect } from 'react-redux';
import {removeFromFavorites} from '../redux/Favorites/FavoritesActions';

function FavoriteItem(props) {

    const {image,name,price,currency,id,removeFromFavorites} = props;
    
return (
    <div className="product-item col-12 col-lg-4 mb-3 d-flex flex-column align-items-center">
               <div className='remove'>
                <button style={{background:'transparent',border:'none'}} onClick={()=>{removeFromFavorites({
                    products:{
                        id,
                    }
                })}}>
                    <i className="bi bi-x-lg"></i>
                </button>
               </div>

              <img className="mb-2" src={image} alt="product" />
              <p className="mb-1 text-center">{ name }</p>
              <p className="text-center">{ price +' '+ currency }</p>
    </div>
       ) 
}

function mapDispatchToProps(dispatch){
    return{
        removeFromFavorites: (payload) => {dispatch(removeFromFavorites(payload))},
    }
}


export default connect(null,mapDispatchToProps)(FavoriteItem);