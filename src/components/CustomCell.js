import React from 'react';
import PropTypes from 'prop-types';
import CustomRect from './CustomRect';


class CustomeCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  static propTypes = {
    quoted: PropTypes.number.isRequired,
    booked: PropTypes.number.isRequired,
    threshold: PropTypes.number.isRequired,
  };

  render() {
    const { quoted, booked, threshold } = this.props;
    const sub = quoted - booked;
    return (
      <div className='custom-cell'>
        <div>{quoted}</div>
        <CustomRect sub={sub} threshold={threshold} />
        <div>
          <div>{booked}</div>
          <div>{sub}</div>
        </div>
      </div>
    );
  }
}

export default CustomeCell;