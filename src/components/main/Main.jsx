import React, {Component} from 'react';
import Holidays from "../holidays/Holidays";
import axios from 'axios';
import {Link} from "react-router-dom";
import './main.scss';

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            allHolidays: []
        };


    }

    componentDidMount(){
        fetch(`http://praktika.test/api/allHolidays`)
            .then(response => response.json())
            .then(
                data=>{
                    this.setState({
                        allHolidays: data
                    }, () => console.log(this.state.allHolidays))
                })
    }
    render(){

        return(
            <main>
                <div className="container">
                        <div className="card-body">
                           <Holidays holidays = {this.state.allHolidays}/>
                          <div className="text-center">
                            <div className="btn btn-primary  py-2 px-4 mt-5"><Link to="/orders" type="submit">Pridėti</Link></div>
                          </div>
                        </div>
                    </div>

            </main>
        );

    }

}
export default Main;