import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
    constructor(){
      super();
      this.state = {
        fontColor: 'black',
        fontSize: 12,
        fontFamily: 'monospace',
        allowEdit: 'true'
      };
      this.updateColor = this.updateColor.bind (this);
      this.updateEditStatus = this.updateEditStatus.bind (this);
    } 

  updateColor(val) {
    this.setState({
      fontColor: val
    })
  }

  // updateSize

  // updateFamily

  updateEditStatus(value){
    this.setState({
      allowEdit: value
    })
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle update = {this.updateEditStatus}/>
          <ColorChanger allowEdit= {this.state.allowEdit} update = {this.updateColor}/>
        </div>
        <div className="textArea">
        <TextContainer fontColor = {this.state.fontColor}/>
        </div>
      </div>
    )
  }
}

export default App;
