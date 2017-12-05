import React, { Component } from 'react';

export default class ColorChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({ 
      allowEdit: nextProps.allowEdit
    })
  }


  render() {
    const { update, allowEdit } =this.props;
    return (
      <select className="dropDownContainer" onChange={ (e) => update(e.target.value)} disabled={allowEdit === 'false' } >
        <option value="black"> Black </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
      </select>
    )
  }
}