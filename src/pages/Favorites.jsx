import React from 'react'
import Layout from '../components/Layout'
import {connect} from 'react-redux'
import FavoriteList from '../components/FavoriteList'

function Favorites(props) {

  const {favorites} = props;

  return ( 

    <Layout>

      <div className='container '>
        <h1>Favorite</h1>
        <FavoriteList
          favorites={favorites}
        />
      </div>

    </Layout>
  )

}


function mapStateToProps(state){
  
    return{
      userLogged: state.user.data,
      favorites:state.favorites.products,
    }
    
}

export default connect(mapStateToProps)(Favorites)