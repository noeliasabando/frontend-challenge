import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import { findDOMNode } from "react-dom";
import "./Imagen.css";


class Imagen extends Component {
  constructor(props) {
    super(props)
    this.state={
      data: {},
      loading: true
    }
  }

  infoTooltip() {   
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.getinfo&api_key=0dc9484b76324cd873e335b941191c0f&photo_id=45589503031&secret=92ad3c3d65470592&tags=flowers&format=json&nojsoncallback=1`)
    .then(response=>response.json())
    .then(data =>{
      this.setState({
        data: data.photo,
        loading:false
      })
    })
  }

  componentWillMount(){
    this.infoTooltip()
  }

  render() {
    let image = this.props.data;
    let title= this.props.data.title;
    return (
      <div className="imagen">
        <img className="image" onClick={()=>{ ReactTooltip.show(findDOMNode(this.refs.foo))}} src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} alt="images" />
        <p ref="foo" data-tip={title}></p>
        {/* <p>Título: </p>
        <p>Descripción:</p>
        <p>Fecha de Post:</p>
        <p>Fecha de actualización</p>
        <p>Tags:</p>
        <p>Usuario:</p> */}
        <ReactTooltip />
      </div>
    )
  }
}

export default Imagen;