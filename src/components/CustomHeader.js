import React from "react";
import PropTypes from 'prop-types';

class CustomHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: 'asc',
    }
  }

  static propTypes = {
    onSort: PropTypes.func.isRequired,
    header: PropTypes.string.isRequired,
  }
  render() {
    const { header } = this.props;
    return (
      <div className="custom-header">
          <i className="fa fa-sort" style={{color: "blue"}} onClick={() => this.props.onSort("$queried")} ></i>
          <span style={{fontSize:"16px"}}>&nbsp;{header}&nbsp;</span>
          <i className="fa fa-sort" style={{color: "red"}} onClick={() => this.props.onSort('$booked')}></i>
      </div>
    );
  }
}

export default CustomHeader;