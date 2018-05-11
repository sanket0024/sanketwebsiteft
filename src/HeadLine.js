import React, {Component} from 'react';
import './app.css';

class HeadLine extends Component {
    render() {
        return(
            <div>
                <hr/>
                <div id="heading" className="jumbotron mb-1">
                    <h1 className="font-weight-bold font-italic text-dark text-center">{this.props.children}</h1>
                </div>
                <hr/>
            </div>
        );
    }
}

export default HeadLine;
