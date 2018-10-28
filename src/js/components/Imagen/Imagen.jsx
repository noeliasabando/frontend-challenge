import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./Imagen.css";


class Imagen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      loading: true,
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  infoModal() {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.getinfo&api_key=0dc9484b76324cd873e335b941191c0f&photo_id=${this.props.data.id}&secret=92ad3c3d65470592&tags=flowers&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.photo,
          loading: false
        })
      })
  }

  componentDidMount() {
    this.infoModal()
  }

  render() {
    let image = this.props.data;
    let title = this.props.data.title;
    if (this.state.loading === false) {
      let published = this.state.data.dates.taken;
      let user = this.state.data.owner.username;
      let likes = this.state.data.dates.posted;
      let description = this.state.data.description._content;
      let tags = this.state.data.tags.tag.map(function (tag) {
        return tag.raw
      });
      if (tags.length > 3) {
        tags = tags.slice(0, 3).join(", ")
      }

      return (
        <div className="imagen">
          <img className="image" onClick={this.toggle} src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} alt="images" />

          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>
              <p>Título: {title}</p>
              <p>Usuario: {user}</p>
              <p>Tags: {tags}</p>
            </ModalHeader>
            <ModalBody>
              <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} alt="image" className="image" />
            </ModalBody>
            <ModalFooter className="text-left">
              <p className="modalFotter">Publicada: {published} <br /> Likes: {likes} <br /> Descripción: {description}</p>
            </ModalFooter>
          </Modal>
        </div>
      )
    } else {
      return (
        <div className="imagen">
          <img className="image" onClick={this.toggle} src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} alt="images" />
        </div>
      )
    }
  }
}

export default Imagen;