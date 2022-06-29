import React from 'react';
import {Link} from 'react-router-dom';

function HomeCategory(props) {

const {image,title,description,routeName} = props;

  return (
    <div className="col-12 col-md-6 my-3">

      <Link style={{textDecoration:'none',color:'inherit'}} to={`/category/${routeName}`}>
                <div className="w-100">
                    <img src={image} alt={title} className="w-100"/>
                </div>
                <h2 className="h4 my-1"><strong>{title}:</strong></h2>
                <p className="m-0">{description}</p>
      </Link>
      
    </div>
  )

}

export default HomeCategory;