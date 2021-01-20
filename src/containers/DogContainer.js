import React, { Component } from "react";
// import { NavLink } from 'react-router-dom';
import Select from "../components/Select";
import Picture from "../components/Picture";
import { getBreeds, getImages, addToFavorites } from "../redux/actionCreator";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class DogContainer extends Component {
    state = {
        selectedBreed: "",
    };

    componentDidMount() {
        this.props.getBreeds();
    }

    // addToFavorites = (url) => {
    //     store.favorites.push(url);
    //     console.log(store.favorites);
    // };
    renderPictures = () =>
        this.props.images.map((url) => {
            return (
                <div>
                    <Picture url={url} />
                    <button onClick={() => this.props.addToFavorites(url)}>
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
                    options={this.props.breeds}
                    handleOnChange={this.props.getImages}
                />
                <Link to={"/favorites"}>Favorites</Link>
                {this.props.images.length > 0 ? (
                    this.renderPictures()
                ) : (
                    <p>Select a Breed to see picture</p>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    breeds: state.breeds,
    images: state.images,
});

export default connect(mapStateToProps, {
    getBreeds,
    getImages,
    addToFavorites,
})(DogContainer);
