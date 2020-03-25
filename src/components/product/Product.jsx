import React, {Component} from 'react';
import {Link} from "react-router-dom"

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {product: {}};
    }

    componentDidMount() {

        fetch(`http://skelbimai.test/api/product/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(
                data => {
                    this.setState({
                        product: data
                    })
                })
    }

    render() {
        const productId = localStorage.setItem('id', this.state.product.id);
        return (
            <div class="col-lg-9">

                <div class="card mt-4">
                    <img class="card-img-top img-fluid" src="http://placehold.it/900x400" alt=""/>
                    <div class="card-body">
                        <h3 class="card-title">{this.state.product.title}</h3>
                        <h4>$24.99</h4>
                        <p class="card-text">{this.state.product.description}</p>
                        <p class="card-text">{this.state.product.price}</p>
                        <span class="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
                        4.0 stars
                        <Link to="/orders" type="submit">Uzsakyti</Link>
                    </div>
                </div>
            </div>

        );

    }

}

export default Product;
