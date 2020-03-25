import React, {Component} from "react";
import axios from 'axios';
import './orders.scss';

class Orders extends Component {


    constructor(props) {
        super(props);
        this.state = {
            img: '',
            title: '', description: ''
        };

        this.handleTitle = this.handleTitle.bind(this);
        this.handleLastDescription = this.handleLastDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
        const fd = new FormData();
        fd.append('img', this.state.img);
        fd.append('title', this.state.title);
        fd.append('description', this.state.description);
        axios.post('http://praktika.test/api/store-holiday', fd)
            .then(response => {
                console.log(response)
            });
    };
    handleTitle(event) {
        this.setState({title: event.target.value});
    }

    handleLastDescription(event) {
        this.setState({description: event.target.value});
    }
    fileSelectedHandler = event => {
        this.setState({
            img: event.target.files[0]
        })
    };


    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-7 mb-5">

                    <h3 className="mb-4 text-black">Pridekite atostogas</h3>

                    <form onSubmit={this.handleSubmit} encType="multipart/form-data">

                        <div className="row form-group">
                            <div className="col-md-12">
                                <label className="text-black" htmlFor="title">Pavadinimas</label>
                                <input type="text" id="title" value={this.state.title}
                                       onChange={this.handleTitle}
                                       name="title" className="form-control"/>
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-md-12">
                                <label className="text-black" htmlFor="title">Aprašymas</label>
                                <input type="text" id="title" value={this.state.description}
                                       onChange={this.handleLastDescription} name="title"
                                       className="form-control"/>
                            </div>
                        </div>


                        <div className="row form-group">
                            <div className="col-md-12">
                                <label className="text-black" htmlFor="title">Prideti paveiksleli</label>
                                <input type="file" id="img" onChange={this.fileSelectedHandler} name="img"
                                       className="form-control"/>
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-md-12">
                                <input type="submit" value="Pridėti"
                                       className="btn btn-primary py-2 px-4 text-white"/>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default Orders;