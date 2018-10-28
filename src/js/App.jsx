import React, { Component } from "react";
import Imagenes from "./components/Imagenes/Imagenes";

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      page: 0,
      images:[],
      loading: true,
    }

    window.onscroll=()=>{
      if(this.state.loading === true){
        return
      }if(
        window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
      ){
        this.loadImages();
      }
    }
  }

  loadImages() {   
    let newPage= this.state.page+1; 
    let firstImages=this.state.images;
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0dc9484b76324cd873e335b941191c0f&tags=flowers&format=json&nojsoncallback=1&page=${newPage}&per_page=20`)
    .then(response=>response.json())
    .then(data =>{
      this.setState({
        images: firstImages.concat(data.photos.photo),
        page: newPage,
        loading: false
      })
    })
  }

  componentDidMount(){
    this.loadImages()
  }

  render() {
    return (
      <div className="app">
        <Imagenes dataImages={this.state.images} />
      </div>
    )
  }
}

export default App;

