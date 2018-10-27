import React, { Component } from "react";
import "./Imagen.css";


class Imagen extends Component{
  constructor(){
    super()
  }

  render(){
    let image = this.props.data;
    return(
      <div className="imagen">
        <img className="image" src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} alt="images"/>
        <p>Título: </p>
        <p>Descripción:</p>
        <p>Fecha de Post:</p>
        <p>Fecha de actualización</p>
        <p>Tags:</p>
        <p>Usuario:</p>
      </div>
    )
  }
}

export default Imagen;