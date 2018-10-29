import React, { Component } from "react";
import { Input } from "reactstrap";
import "./InputBarra.css"

class InputBarra extends Component {

  handleyKeyPress(event){
    if (event.key === "Enter") {
      this.props.newSearch(event.target.value)
      event.target.value="";
    }
  }
  render() {
    return (
      <div className="inputBarra col-8 offset-2">
        <Input className="input" placeholder="Buscar" onKeyPress={this.handleyKeyPress.bind(this)} />
      </div>
    )
  }
}

export default InputBarra;