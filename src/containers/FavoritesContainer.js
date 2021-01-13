import React, { Component } from "react";
import { store } from "../store";
import Picture from "../components/Picture";
import { Link } from "react-router-dom";

class FavoritesContainer extends Component {
    state = {
        favorites: store.favorites,
    };

    renderPictures = () =>
        this.state.favorites.map((url) => {
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
            <div>
                <Link to="/">Home</Link>
                {this.renderPictures()}
            </div>
        );
    }
}

export default FavoritesContainer;
