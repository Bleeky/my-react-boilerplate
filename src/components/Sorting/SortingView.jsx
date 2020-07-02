import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Dropdown } from "@zapsa/react-ui";
import Icon from "components/Icon";
import { checkObj } from "common/helpers";

class SortingView extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    sorts: PropTypes.shape().isRequired,
    updateSorting: PropTypes.func.isRequired,
    setSorting: PropTypes.func.isRequired,
    sorting: PropTypes.shape().isRequired,
  };

  static defaultProps = {
    className: undefined,
  };

  constructor(props) {
    super(props);
    this.state = {};

    this.props.setSorting(
      { ...this.props.sorts },
      { reducerField: this.props.name }
    );
  }

  render() {
    return (
      <div className={this.props.className}>
        {checkObj(this.props.sorting, [this.props.name]) && (
          <Dropdown className="ui-dropdown--right">
            <a
              data-dropdown-trigger
              className="ui-dropdown-button button button--greyLink button--icon"
            >
              Sort
              <Icon icon="arrowDown" className="icon--16dp u-ml-05" />
            </a>
            <div data-dropdown-content>
              <ul>
                {checkObj(this.props.sorting, [this.props.name, "options"]).map(
                  (sort) => (
                    <li
                      onClick={() => {
                        this.props.updateSorting(
                          { sort: sort.value },
                          { reducerField: this.props.name }
                        );
                      }}
                      role="presentation"
                    >
                      <span className="ui-dropdown-option ui-dropdown-option--icon">
                        {this.props.sorting[this.props.name].selected ===
                          sort.value && (
                          <span className="icon">
                            {this.props.sorting[this.props.name].desc
                              ? "↓"
                              : "↑"}
                          </span>
                        )}
                        {sort.name}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </Dropdown>
        )}
      </div>
    );
  }
}

export default SortingView;
