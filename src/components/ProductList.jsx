import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import { connect } from "react-redux";

function ProductList(props) {
  const { filterIntervals, products, categoryName } = props;

  function multipleFilter() {
    if (filterIntervals.length === 0 || filterIntervals.length === 4) {
      return products;
    } else {
      let filterList = [];
      filterIntervals.forEach((interval) => {
        const filterPart = products.filter(
          (item) =>
            item.price > interval.firstValue &&
            item.price <= interval.secondValue
        );
        filterList = [...filterList, ...filterPart];
      });
      return filterList;
    }
  }

  return (
    <div className="row my-4">
      {products
        ? multipleFilter().map((filteredProduct, index) => {
            return (
              <ProductItem
                categoryName={categoryName}
                id={filteredProduct.id}
                key={index}
                name={filteredProduct.name}
                price={filteredProduct.price}
                currency={filteredProduct.currency}
                image={filteredProduct.image}
              />
            );
          })
        : null}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    filterIntervals: state.filtered.filterIntervals,
  };
}

export default connect(mapStateToProps)(ProductList);
