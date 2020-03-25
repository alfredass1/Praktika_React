import React, {Component} from "react"
import {Link} from "react-router-dom"

function Holidays(props) {
    const holidays = props.holidays.map(holiday => {
        const link = `/holiday/${holiday.id}`;
            return(
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <img src={ `${holiday.img}` } />

                    <div className="card-body">
                        <h4 className="card-title">
                            <a href="#">{holiday.title}</a>
                        </h4>
                        <p className="card-text">{holiday.description}</p>
                    </div>
                    <div className="card-footer">
                        <Link to={link} type="submit" >More...</Link>
                    </div>
                </div>
            </div>

    )

    })
    return (
        <div className="row">
            {holidays}
        </div>
    );
}

export default Holidays;