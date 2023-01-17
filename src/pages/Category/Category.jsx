import React, { Component } from "react";
import Layout from "../../components/Layout";
import products from "../../utils/products.json";
import ProductList from "../../components/ProductList";
import BaseListSidebar from "../../components/BaseListSidebar";
import "./Category.css";
import { connect } from "react-redux";
import { resetFilters } from "../../redux/Filter/FilterActions";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {},
      items: [],
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const categoryName = match.params.categoryName;
    this.setState({ category: products[categoryName] });
  }

  componentDidUpdate() {
    this.props.resetFilters();
  }

  render() {
    return (
      <Layout>
        <div className="category container d-flex container-min-max-width">
          <div className="filter-list">
            <h2 className="">{this.state.category.name}</h2>
            <BaseListSidebar products={this.state.category.items} />
          </div>
          <div className="w-75">
            <ProductList
              categoryName={this.state.category.name}
              products={this.state.category.items}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    resetFilters: () => dispatch(resetFilters()),
  };
}

export default connect(null, mapDispatchToProps)(Category);
