import AssemblaAPI from '.././service/AssemblaAPI.js';
import AssStore from '.././store/AssStore.js';
import React from 'react'
import './Reviews.css';
const loader = require('.././images/loader.gif');

const style = {
  table: {
    'display': 'block',
    'height': '620px',
    'overflowY': 'scroll',
    'width' : '100%',
  },
  hRow: {
    'backgroundColor': '#4CAF50',
    'color': 'white',
    'width': '10%',
  },
  hRowTitle: {
    'backgroundColor': '#4CAF50',
    'color': 'white',
    'width': '60%',
  },
  row: {
    'textAlign': 'left',
  }
}

class Reviews extends React.Component {
  _page: Number;
  _reviews: Array;
  _count: Number;

  constructor(props) {
    super(props);
    this.state = {
      reviews: AssStore.getInstance().reviews
        ? AssStore.getInstance().reviews
        : [],
    };
    this._page = 1;
    this._count = 1;
    this._reviews = [];
    this._activityFetched = this._activityFetched.bind(this);
    this._trim = this._trim.bind(this);
    this._onNextClick = this._onNextClick.bind(this);
  }

  componentDidMount() {
    if (this.state.reviews.length <= 0) {
      AssemblaAPI.getActivity(
        this._page,
        this._activityFetched,
      );
    }
  }

  _activityFetched($e, $r) {
    const a = JSON.parse($r);
    const curReviews = a.filter((obj) => {
      return (
        obj.operation === 'commented on' &&
        obj.author_id === AssStore.getInstance().getAuthorID()
      );
    });
    this._reviews.push.apply(this._reviews, curReviews);
    if (
      this._reviews.length < this._count * 50 &&
      this._page <= 60/*hard coding for me*/
    ) {
      AssemblaAPI.getActivity(
        (++this._page).toString(),
        this._activityFetched,
      );
    } else {
      AssStore.getInstance().reviews = this._reviews;
      this.setState({
        reviews: this._reviews,
      });
    }
  }

  _content() {
    const div = this.state.reviews.map((element, index, array) => {
      return (
        <tr key={index}>
          <td style={style.row}>
            <a href={element.url}>#{element.object_id}</a>
          </td>
          <td style={style.row}>{new Date(element.date).toLocaleString()}</td>
          <td style={style.row}>{element.author_name}</td>
          <td style={style.row}>{element.comment_or_description}</td>
        </tr>
      );
    });
    return (
      <table style={style.table}>
        <tbody>
          <tr>
            <th style={style.hRow}> ID </th>
            <th style={style.hRow}> Date </th>
            <th style={style.hRow}> Author </th>
            <th style={style.hRowTitle}> Comment / Description </th>
          </tr>
          {div}
        </tbody>
      </table>
    );
  }

  render() {
    const loading = (
      <div id="loading" className="loading">
        <img id="loading-image" src={loader} alt="Loading..." />
      </div>
    );
    if (this.state.reviews.length <= 0) {
      return loading;
    }
    return (
      <div className="reviewContents">
        {this._content()}
        <div>
          <button
            type="button"
            className="button"
            disabled={this._page >= 60}
            onClick={this._onNextClick}>
            Load more...
          </button>
        </div>
      </div>
    );
  }

  _trim(s, padding, l) {
    return s.length > l ? s.substring(padding, l - padding) + '...' : s;
  };

  _onNextClick() {
    ++this._page;
    ++this._count;
    AssemblaAPI.getActivity(
      this._page.toString(),
      this._activityFetched,
    );
  }
}

module.exports = Reviews;
