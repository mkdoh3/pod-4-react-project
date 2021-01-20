import React from "react";
import Picture from "../components/Picture";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function FavoritesContainer(props) {
    return (
        <div className="container">
            <h2>Favorites!</h2>
            {props.favorites.map((imgURL, index) => {
                console.log(imgURL);
                return (
                    <>
                        <Picture key={index} url={imgURL} altText={`a dog`} />
                    </>
                );
            })}
            <Link to={"/"}>Home</Link>
        </div>
    );
}

const mapStateToProps = (state) => ({
    favorites: state.favorites,
});

export default connect(mapStateToProps)(FavoritesContainer);
