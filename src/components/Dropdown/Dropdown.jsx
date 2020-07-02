import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const { Children, cloneElement, Component } = React;

class Dropdown extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
    className: PropTypes.string,
    onClose: PropTypes.func,
  };

  static defaultProps = {
    className: null,
    onClose: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      opened: false,
    };

    this.content = null;
    this.onTriggerClick = ::this.onTriggerClick;
    this.trigger = null;
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  onTriggerClick(event) {
    const { opened } = this.state;

    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ opened: !opened });
  }

  handleClick = (evt) => {
    if (this.dropdown.contains(evt.target)) {
      this.setState({ opened: false });
      this.props.onClose(evt);
    }
  };

  renderTrigger() {
    return cloneElement(this.trigger, {
      onClick: this.onTriggerClick,
    });
  }

  renderContent() {
    const { opened } = this.state;

    return cloneElement(this.content, {
      className: classNames("ui-dropdown-content", {
        "ui-dropdown-content--open": opened,
      }),
      onClick: (e) => {
        this.props.onClose(e);
        this.setState({ opened: false });
      },
    });
  }

  render() {
    const { children, className } = this.props;

    if (Children.count(children) !== 2) return null;
    Children.map(children, (item) => {
      if (item.props && item.props["data-dropdown-trigger"])
        this.trigger = item;
      if (item.props && item.props["data-dropdown-content"])
        this.content = item;
    });

    return (
      <div
        style={this.state.isEmpty ? { display: "none" } : {}}
        ref={(dropdown) => {
          this.dropdown = dropdown;
        }}
        className={classNames("ui-dropdown", className)}
      >
        {this.renderTrigger()}
        {this.renderContent()}
      </div>
    );
  }
}

export default Dropdown;
