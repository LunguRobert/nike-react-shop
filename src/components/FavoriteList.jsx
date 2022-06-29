import React from 'react'
import FavoriteItem from './FavoriteItem';

function FavoriteList(props) {

    const {favorites} = props;

return (

        <div className='row mb-4'>

        {
            favorites
            ?
            favorites.map((element,index)=>{
                return(
                    <FavoriteItem
                        id={element.id}
                        key={index}
                        name={element.name}
                        price={element.price}
                        currency={element.currency}
                        image={element.image}
                    />
                )
            })
            :
            null
        }

        </div>
        

  )
}


export default FavoriteList;