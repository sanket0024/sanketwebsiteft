import React, {Component} from 'react';
import './app.css';

class HeadLine extends Component {
    render() {
        return(
            <div>
                <div className="">
                    <p className="rounded mb-1 text-light bg-light">.</p>
                </div>
                <div className="jumbotron mb-1 bg-light">
                    <h1 id="heading" className="font-weight-bold font-italic bg-light text-dark text-center">{this.props.children}</h1>
                </div>
                <div className="">
                    <p className="rounded text-light bg-light">.</p>
                </div>
            </div>
        );
    }
}

export default HeadLine;
