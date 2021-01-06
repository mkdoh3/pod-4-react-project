import React, { Component } from "react";
import Select from "../components/Select";
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

    handleOnChange = () => {};

    render() {
        return (
            <div className="container">
                <h1>Doggo Browser</h1>
                <h3>Select a Breed to Get Started: </h3>
                <Select
                    options={this.state.breeds}
                    handleOnChange={this.handleOnChange}
                />
            </div>
        );
    }
}

export default DogContainer;
