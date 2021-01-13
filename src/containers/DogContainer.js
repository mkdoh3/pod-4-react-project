import React, { Component } from "react";
// import { NavLink } from 'react-router-dom';
import Select from "../components/Select";
import Picture from "../components/Picture";
class DogContainer extends Component {
  state = {
    breeds: [],
    images: [],
    selectedBreed: "",
  };

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then(({ message }) => {
        const breeds = Object.keys(message);
        this.setState({ breeds });
      });
  }

  handleOnChange = (e) => {
    let selectedBreed = e.target.value;
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images`)
      .then((res) => res.json())
      .then((data) => {
        const images = data.message.slice(0, 10);
        this.setState({
          images,
          selectedBreed,
        });
      });
  };

  renderPictures = () => this.state.images.map((url) => <Picture src={url} />);

  // .then(json => this.setState({images: json}))

  render() {
    return (
      <div className="container">
        <h1>Doggo Browser</h1>
        <h3>Select a Breed to Get Started: </h3>
        <Select
          options={this.state.breeds}
          handleOnChange={this.handleOnChange}
        />
        {this.state.images.length > 0 ? (
          this.renderPictures()
        ) : (
          <p>Select a Breed to see picture</p>
        )}
      </div>
    );
  }
}

export default DogContainer;
