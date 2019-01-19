import React, { Component } from 'react';


// Styling
import '../style/components/notFound.css';


class NotFound extends Component {


    render() {
        return (

            <div className="notFoundContainer">
                <p className="pageHeader"> The page you're looking for does not exist </p>
            </div>
        );
    }
}

export default NotFound;