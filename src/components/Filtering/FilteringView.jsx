import React, { Component } from "react";
import PropTypes from "prop-types";
import { Dropdown } from "@zapsa/react-ui";
import Icon from "components/Icon";
import { checkObj } from "common/helpers";

class FilteringView extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    filters: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    updateFiltering: PropTypes.func.isRequired,
    setFiltering: PropTypes.func.isRequired,
    filtering: PropTypes.shape().isRequired,
  };

  static defaultProps = {
    className: undefined,
  };

  constructor(props) {
    super(props);
    this.state = {};

    this.props.setFiltering(
      { filters: this.props.filters },
      { reducerField: this.props.name }
    );
  }

  render() {
    return (
      <div className={this.props.className}>
        {checkObj(this.props.filtering, [this.props.name], []).map((filter) => (
          <Dropdown>
            <a
              data-dropdown-trigger
              className="ui-dropdown-button button button--greyLink button--icon"
            >
              {filter.name}
              <Icon icon="arrowDown" className="icon--16dp u-ml-05" />
            </a>
            <div data-dropdown-content>
              <ul>
                {filter.options.map((option) => (
                  <li
                    onClick={() => {
                      this.props.updateFiltering(
                        { filter: filter.label, option: option.value },
                        { reducerField: this.props.name }
                      );
                    }}
                    role="presentation"
                    className={
                      filter.selected.find(
                        (selected) => selected === option.value
                      )
                        ? "selected"
                        : ""
                    }
                  >
                    <span className="ui-dropdown-option">{option.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Dropdown>
        ))}
      </div>
    );
  }
}

export default FilteringView;
