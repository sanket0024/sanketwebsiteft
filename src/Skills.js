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
                            <td>Java, Spring Boot, Angular 6, React js, SQL, Python Flask, HTML, CSS, Bootstrap, XSLT</td>
                        </tr>
                        <tr>
                            <td>Applications/Database systems</td>
                            <td>MySQL, SQLite, MongoDB, Salesforce (CRM - PaaS) and Workday (HCM and Financial - SaaS)</td>
                        </tr>
                        <tr>
                            <td>Other Tools</td>
                            <td>JIRA, Git, GitHub, BitBucket, AWS EC2, AWS RDS, AWS S3</td>
                        </tr>
                        </tbody>
                    </table>
                </section>

            </div>
        );
    }
}

export default Skills;