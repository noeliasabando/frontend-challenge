import React, { Component } from "react";
import Imagen from "../Imagen/Imagen";
import "./Imagenes.css";

class Imagenes extends Component{
  showImages(){
    return this.props.dataImages.map((infoImage)=>{
      return <Imagen data={infoImage} />
    })
  }


  render(){
    return(
      <div className="imagenes">
        {this.showImages()}
      </div>
    )
  }
}

export default Imagenes;