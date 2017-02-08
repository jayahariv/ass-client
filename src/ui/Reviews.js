import React from 'react'

class Reviews extends React.Component {
  static PropTypes = {
    callback: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    // call service to load all the reviews done by me!!
  }

  render() {
    return (
      // show all the reviews by me!!
      <div> Rewviews</div>
    );
  }
}

module.exports = Reviews;
