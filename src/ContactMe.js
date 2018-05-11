import React, { Component } from 'react';
import './app.css';
import HeadLine from "./HeadLine";

class ContactMe extends Component {
    render() {
        return (
            <div className="text-light">
                <section className="mt-5 mb-5">
                    <HeadLine>Contact Me</HeadLine>
                </section>
                <section>
                    <form>
                        <div className="form-group">
                            <label for="sendername">Name: </label>
                            <input type="text" className="form-control" id="sendername" placeholder="First Last"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="senderemail">Email: </label>
                            <input type="text" className="form-control" id="senderemail" placeholder="email@some.com"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject: </label>
                            <input type="text" className="form-control" id="subject"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="messagebody">Message: </label>
                            <textarea className="form-control" id="messagebody"></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mb-4">Send</button>
                        </div>
                    </form>
                </section>
            </div>
        );
    }
}

export default ContactMe;