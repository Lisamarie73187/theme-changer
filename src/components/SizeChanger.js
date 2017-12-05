import React, { Component } from 'react';

export default class SizeChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
  }

  // componentWillReceiveProps

  render() {
    const { update, allowEdit } =this.props;
    return (
      <select className="dropDownContainer" onChange={ (e) => update( parseInt((e.target.value),10) )} disabled={allowEdit === 'false'}>
        <option value="12"> 12 </option>
        <option value="13"> 13 </option>
        <option value="14"> 14 </option>
      </select>
    )
  }
}