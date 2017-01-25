import React, { Component } from 'react';
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
      { id: 'item1', text: 'Option 1'},
      { id: 'item2', text: 'Option 2'}
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
