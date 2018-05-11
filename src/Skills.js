import React, { Component } from 'react';
import './app.css';
import HeadLine from "./HeadLine";

class Skills extends Component {
    render() {
        return (
            <div>
                <section className="mt-5 mb-5">
                    <HeadLine>Skills</HeadLine>
                </section>
                <section className="table-responsive table-hover text-light">
                    <table className="table">
                        <tbody>
                        <tr>
                            <td>Programming Languages</td>
                            <td>Java, Spring Boot, SQL, Python, Flask, XSLT, React js, HTML, CSS</td>
                        </tr>
                        <tr>
                            <td>Applications/Database systems</td>
                            <td>JIRA, GitHub, MySQL, SQLite, MongoDB</td>
                        </tr>
                        <tr>
                            <td>Saas Tools</td>
                            <td>Salesforce and Workday</td>
                        </tr>
                        </tbody>
                    </table>
                </section>

            </div>
        );
    }
}

export default Skills;