import React, {Component} from 'react';
import {Link} from "react-router-dom"

class Holiday extends Component {
    constructor(props) {
        super(props);
        this.state = {holiday: {}};
    }

    componentDidMount() {

        fetch(`http://praktika.test/api/holiday/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(
                data => {
                    this.setState({
                        holiday: data
                    })
                })
    }

    render() {
        const holidayId = localStorage.setItem('id', this.state.holiday.id);
        return (
            <div class="col-lg-12">

                <div class="card mt-4">
                    <img class="card-img-top img-fluid" src={"http://praktika.test/storage/" + this.state.holiday.img} alt=""/>
                    <div class="card-body">
                        <h3 class="card-title">{this.state.holiday.title}</h3>

                        <p class="card-text">{this.state.holiday.description}</p>

                        <Link to="/orders" type="submit"></Link>
                    </div>
                </div>
            </div>

        );

    }

}

export default Holiday;
