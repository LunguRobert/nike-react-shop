import React, { Component } from "react";
import { connect } from "react-redux";
import { addFilter, removeFilter } from "../redux/Filter/FilterActions";

class BaseListSidebar extends Component {
  constructor(props) {
    super(props);
  }

  handleSlidebarChange(event) {
    const id = event.target.id;
    const firstValue = event.target.name;
    const secondValue = event.target.value;
    const filterValues = {
      filterIntervals: [
        {
          id,
          firstValue,
          secondValue,
        },
      ],
    };

    const checked = event.target.checked;
    if (checked) {
      this.props.addFilter(filterValues);
    } else {
      this.props.removeFilter(filterValues);
    }
  }

  render() {
    return (
      <ul className="custom-control custom-checkbox">
        <li>
          <input
            key="1"
            type="checkbox"
            className="custom-control-input"
            id="1"
            name="0"
            value="50"
            onClick={(event) => {
              this.handleSlidebarChange(event);
            }}
          />
          <label className="custom-control-label" htmlFor="1">
            <small>Sub 50 Lei</small>
          </label>
        </li>

        <li>
          <input
            key="2"
            type="checkbox"
            className="custom-control-input"
            id="2"
            name="50"
            value="100"
            onClick={(event) => {
              this.handleSlidebarChange(event);
            }}
          />
          <label className="custom-control-label" htmlFor="2">
            <small>Intre 50 si 100 Lei</small>
          </label>
        </li>

        <li>
          <input
            key="3"
            type="checkbox"
            className="custom-control-input"
            id="3"
            name="100"
            value="200"
            onClick={(event) => {
              this.handleSlidebarChange(event);
            }}
          />
          <label className="custom-control-label" htmlFor="3">
            <small>Intre 100 si 200 Lei</small>
          </label>
        </li>

        <li>
          <input
            key="4"
            type="checkbox"
            className="custom-control-input"
            id="4"
            name="200"
            value="500"
            onClick={(event) => {
              this.handleSlidebarChange(event);
            }}
          />
          <label className="custom-control-label" htmlFor="4">
            <small>Intre 200 si 500 Lei</small>
          </label>
        </li>
      </ul>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addFilter: (payload) => dispatch(addFilter(payload)),
    removeFilter: (payload) => dispatch(removeFilter(payload)),
  };
}

export default connect(null, mapDispatchToProps)(BaseListSidebar);
