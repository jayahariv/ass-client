import React from 'react';
import './SideMenu.css';
import { SideNav } from 'react-sidenav';

class SideMenuContainer extends React.Component {
  state: Object;

  constructor(props) {
    super(props);

    this.updateSelection = this.updateSelection.bind(this);
    this.state = {
      selected: '',
    };
  }

  render() {
    var navi = [
      { id: 'mentions', text: '@Mentions'},
      { id: 'item2', text: 'Comments'}
    ];

    return (
      <div className="SideMenuContainer">
        <SideNav
          selected={this.state.selected}
          navs={navi}
          onSelection={this.updateSelection} />
      </div>
    );
  }

  updateSelection(selection) {
    console.log(selection);
  }
}

module.exports = SideMenuContainer;
