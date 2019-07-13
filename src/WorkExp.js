import React, { Component } from 'react';
import './app.css';
import HeadLine from "./HeadLine";

const fieldClasses = "font-weight-bold font-italic padding0";
const valuesClasses = "font-italic padding0 px-3";

class WorkExp extends Component {
	render() {
		return (
			<div className="text-light">
				<section className="mt-5 mb-5">
					<HeadLine>Work Experience</HeadLine>
				</section>
				<section className="text-light">
					<table className="table table-borderless">
						<tbody>
							<tr className="text-warning">
								<td className={fieldClasses}>Name</td>
								<td id="text" className={valuesClasses}><strong>Grubhub</strong></td>
							</tr>
							<tr>
								<td className={fieldClasses}>Location</td>
								<td id="text" className={valuesClasses}>Chicago, IL, USA</td>
							</tr>
							<tr>
								<td className={fieldClasses}>Role</td>
								<td id="text" className={valuesClasses}>Software Engineer Intern</td>
							</tr>
							<tr>
								<td className={fieldClasses}>Time Period</td>
								<td id="text" className={valuesClasses}>June 2019 - August 2019</td>
							</tr>
							<tr>
								<td className={fieldClasses}>Technologies</td>
								<td id="text" className={valuesClasses}>Jenkins, GitHub, ANT Scripts, Salesforce</td>
							</tr>
							<tr>
								<td className={fieldClasses}>Responsibilities</td>
								<td id="text" className={valuesClasses}>Working on implementing continuous integration using Jenkins with Git integration by writing ANT scripts for Salesforce code</td>
							</tr>
						</tbody>
					</table>
					<br></br>
					<table className="table table-borderless">
						<tbody>
							<tr className="text-warning">
								<td className={fieldClasses}>Name</td>
								<td id="text" className={valuesClasses}><strong>Kuebix</strong></td>
							</tr>
							<tr>
								<td className={fieldClasses}>Location</td>
								<td id="text" className={valuesClasses}>Maynard, MA, USA</td>
							</tr>
							<tr>
								<td className={fieldClasses}>Role</td>
								<td id="text" className={valuesClasses}>Software Engineer Intern</td>
							</tr>
							<tr>
								<td className={fieldClasses}>Time Period</td>
								<td id="text" className={valuesClasses}>June 2018 - December 2018</td>
							</tr>
							<tr>
								<td className={fieldClasses}>Technologies</td>
								<td id="text" className={valuesClasses}>Angular, Javascript, Java, Spring Boot, and Salesforce</td>
							</tr>
							<tr>
								<td className={fieldClasses}>Responsibilities</td>
								<td id="text" className={valuesClasses}>
									<ol>
										<li>Worked as a full stack feature enhancement developer using Angular, Java - Maven and Salesforce CRM by developing classes and triggers in APEX and creating workflows, custom objects, custom fields and configuring securities in Salesforce on Kuebix logistic tool</li>
										<li>Collaborated with other developers and business analysts to alleviate the number of bugs in the existing software</li>
										<li>Followed agile methodology of project management</li>
									</ol>
								</td>
							</tr>
						</tbody>
					</table>
					<br></br>
					<table className="table table-borderless">
						<tbody>
							<tr className="text-warning">
								<td className={fieldClasses}>Name</td>
								<td id="text" className={valuesClasses}><strong>Appirio - A Wipro Company</strong></td>
							</tr>
							<tr>
								<td className={fieldClasses}>Location</td>
								<td id="text" className={valuesClasses}>Jaipur, RJ, India</td>
							</tr>
							<tr>
								<td className={fieldClasses}>Role</td>
								<td id="text" className={valuesClasses}>Technical Consultant (July 2014 - March 2016) and Software Developer (April 2016 - August 2017)</td>
							</tr>
							<tr>
								<td className={fieldClasses}>Time Period</td>
								<td id="text" className={valuesClasses}>July 2014 - August 2017</td>
							</tr>
							<tr>
								<td className={fieldClasses}>Technologies</td>
								<td id="text" className={valuesClasses}>Salesforce, Workday, Javascript and Java</td>
							</tr>
							<tr>
								<td className={fieldClasses}>Responsibilities</td>
								<td id="text" className={valuesClasses}>
									<ol>
										<li>Worked as Salesforce developer by writing Apex classes and utilizing functionalities like triggers and workflows</li>
										<li>Developed data validator and data loader tool to load clients' data into the Workday system using javascript, Workday public web service APIs, XML, and XSLT</li>
										<li>Gathered clients’ requirements for Workday integration systems</li>
										<li>Developed integration systems of various domains like HCM, US Benefits, Payroll and Recruitment for various clients and produced documentation for the work done with varied team sizes (5 Workday Projects delivered)</li>
									</ol>
								</td>
							</tr>
						</tbody>
					</table>
				</section>
			</div >
		);
	}
}

export default WorkExp;
