import AssemblaAPI from '.././service/AssemblaAPI.js';
import AssStore from '.././store/AssStore.js';
import React from 'react'

const {PropTypes} = React;

type Props = {}

const style = {
  table: {
    'display': 'block',
    'height': '660px',
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
    'text-align': 'left',
  }
}

class Reviews extends React.Component<Props> {
  props: Props;

  static PropTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
    this._activityFetched = this._activityFetched.bind(this);
    this._trim = this._trim.bind(this);
  }

  componentDidMount() {
    AssemblaAPI.getActivity(
      this._activityFetched,
    );
  }

  _activityFetched($e, $r) {
    const a = JSON.parse($r);
    console.log(a);
    this.setState({
      reviews: a.filter((obj) => {
        return (
          obj.operation === 'commented on' &&
          obj.author_id === AssStore.getInstance().getAuthorID()
        );
      }),
    });
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
    return this._content();
  }

  _trim(s, padding, l) {
    return s.length > l ? s.substring(padding, l - padding) + '...' : s;
  };

  _date(d): string {
    return
  }
}

module.exports = Reviews;
