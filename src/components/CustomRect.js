import React from "react";

class CustomRect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  
  render() {
    const { sub, threshold } = this.props;
    let isNormal = (Math.abs(sub) <= threshold);
    let dynamicStyle = {
      backgroundColor: isNormal? '#FED1CF' : '#FFFFFF',
    }
    return (
      <div className="custom-rect" style={dynamicStyle}>
        
      </div>
    )
  }

}

export default CustomRect;