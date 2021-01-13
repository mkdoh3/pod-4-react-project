import React, { Component } from "react";
// import { NavLink } from 'react-router-dom';
import Select from "../components/Select";
import Picture from "../components/Picture";
import { store } from "../store";
import { Link } from "react-router-dom";
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

    addToFavorites = (url) => {
        store.favorites.push(url);
        console.log(store.favorites);
    };
    renderPictures = () =>
        this.state.images.map((url) => {
            return (
                <div>
                    <Picture src={url} />
                    <button onClick={() => this.addToFavorites(url)}>
                        Favorite
                    </button>
                </div>
            );
        });

    render() {
        return (
            <div className="container">
                
                <h3>Select a Breed to Get Started: </h3>
                <Select
                    options={this.state.breeds}
                    handleOnChange={this.handleOnChange}
                />
                <Link to={"/favorites"}>Favorites</Link>
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
