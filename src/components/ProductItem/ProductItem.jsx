import React from "react";
import "./ProductItem.css";
import { connect } from "react-redux";
import { addToCart } from "../../redux/Cart/CartActions";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/Favorites/FavoritesActions";
import { ReactComponent as EmptyHeart } from "../../assets/icons/heart-empty.svg";
import { ReactComponent as FullHeart } from "../../assets/icons/heart-full.svg";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

function ProductItem(props) {
  const {
    categoryName,
    id,
    name,
    price,
    currency,
    image,
    addToCart,
    user,
    favorites,
    addToFavorites,
    removeFromFavorites,
  } = props;

  function checkFavoriteList(favorites) {
    let check = false;
    favorites.forEach((prod) => {
      if (prod.id === id) {
        check = true;
      }
    });
    return check;
  }

  return (
    <div className="product-item col-12 col-lg-4 mb-3 d-flex flex-column align-items-center">
      <div className="empty-heart">
        {user ? (
          checkFavoriteList(favorites) ? (
            <FullHeart
              onClick={() => {
                removeFromFavorites({
                  products: {
                    id,
                  },
                });
              }}
            />
          ) : (
            <EmptyHeart
              onClick={() => {
                addToFavorites({
                  products: {
                    id,
                    categoryName,
                    name,
                    currency,
                    image,
                    price,
                  },
                });
              }}
            />
          )
        ) : (
          <EmptyHeart
            onClick={() => {
              openLoginModal();
            }}
          />
        )}
      </div>

      <Link
        to={`/product/${id}`}
        style={{ textAlign: "center", color: "inherit" }}
      >
        <img className="mb-2" src={image} alt="product" />
        <p className="mb-1 text-center">{name}</p>
        <p className="text-center">{price + currency}</p>
      </Link>

      <button
        className="btn btn-outline-dark"
        onClick={() => {
          addToCart({
            product: {
              id,
              name,
              price,
              currency,
              image,
            },
          });
        }}
      >
        Adauga in cos
      </button>
    </div>
  );
}

function openLoginModal() {
  let element = document.querySelector(".modala");
  ReactDOM.findDOMNode(element).style.visibility = "visible";
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (payload) => dispatch(addToCart(payload)),
    addToFavorites: (payload) => dispatch(addToFavorites(payload)),
    removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload)),
  };
}

function mapStateToProps(state) {
  return {
    user: state.user.data,
    favorites: state.favorites.products,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
