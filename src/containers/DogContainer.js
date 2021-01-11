import React, { Component } from "react";
// import { NavLink } from 'react-router-dom';
import Select from "../components/Select";
import Picture from "../components/Picture";
class DogContainer extends Component {
    state = {
        breeds: [],
        images: [],
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
        let selectedBreed = e.target.value
        fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
        .then(res => res.json())
        .then(message => {
            this.setState({
                images: message
            })
        })
        }
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
                <Picture images={this.state.images}/>
            </div>
        );
    }
}

export default DogContainer;

