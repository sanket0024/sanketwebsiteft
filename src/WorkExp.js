import React, { Component } from 'react';
import './app.css';
import HeadLine from "./HeadLine";

const logoClasses = "mt-4 ml-3 mr-5 img-fluid rounded";
const fieldClasses = "col-3 font-weight-bold font-italic";
const valuesClasses = "ml-3 col-8 font-italic";

class WorkExp extends Component {
	render() {
		return (
			<div className="text-light">
				<section className="mt-5 mb-5">
					<HeadLine>Work Experience</HeadLine>
				</section>
				<section>
					<div id="text" className="ml-1 row">
						<div className="col-lg">
							<img id="companylogo" className={logoClasses} alt="appirio" src="Appirio.jpg"></img>
							<div className="row mt-4">
								<div className={fieldClasses}>Name</div>
								<div className={valuesClasses}>Appirio - A Wipro Company</div>
							</div>
							<div className="row">
								<div className={fieldClasses}>Location</div>
								<div className={valuesClasses}>Jaipur, RJ, India</div>
							</div>
							<div className="row">
								<div className={fieldClasses}>Role</div>
								<div className={valuesClasses}>Technical Consultant (July 2014 - March 2016)</div>
							</div>
							<div className="row">
								<div className={fieldClasses}></div>
								<div className={valuesClasses}>Software Developer (April 2016 - August 2017)</div>
							</div>
							<div className="row">
								<div className={fieldClasses}>From</div>
								<div className={valuesClasses}>July 2014</div>
							</div>
							<div className="row">
								<div className={fieldClasses}>To</div>
								<div className={valuesClasses}>August 2017</div>
							</div>
							<div className="row">
								<div className={fieldClasses}>Technologies</div>
								<div className={valuesClasses}>Salesforce, Workday, Javascript and Java</div>
							</div>
							<div className="row">
								<div className={fieldClasses}>Responsibilities</div>
								<div className={valuesClasses}><strong>1. </strong>Worked as Salesforce developer by writing Apex classes and utilizing functionalities like triggers and workflows<br />
									<strong>2. </strong>Developed data validator and data loader tool to load clients' data into the Workday system using javascript, Workday public web service APIs, XML, and XSLT<br />
									<strong>3. </strong>Gathered clients’ requirements for Workday integration systems<br />
									<strong>4. </strong>Developed integration systems of various domains like HCM, US Benefits, Payroll and Recruitment for various clients and produced documentation for the work done with varied team sizes (5 Workday Projects delivered)</div>
							</div>
							<div className="mb-5"></div>
						</div>
						<div className="col-lg ml-3">
							<img id="companylogo" className={logoClasses} alt="appirio" src="Kuebix.png"></img>
							<div className="row mt-4">
								<div className={fieldClasses}>Name</div>
								<div className={valuesClasses}>Kuebix</div>
							</div>
							<div className="row">
								<div className={fieldClasses}>Location</div>
								<div className={valuesClasses}>Boston, MA, USA</div>
							</div>
							<div className="row">
								<div className={fieldClasses}>Role</div>
								<div className={valuesClasses}>Software Developer Intern</div>
							</div>
							<div className="row">
								<div className={fieldClasses}></div>
								<div className={valuesClasses}><br /></div>
							</div>
							<div className="row">
								<div className={fieldClasses}>From</div>
								<div className={valuesClasses}>June 2018</div>
							</div>
							<div className="row">
								<div className={fieldClasses}>To</div>
								<div className={valuesClasses}>(Present) December 2018</div>
							</div>
							<div className="row">
								<div className={fieldClasses}>Technologies</div>
								<div className={valuesClasses}>Angular 6 and Salesforce (Apex classes triggers and configuraiton)</div>
							</div>
							<div className="row">
								<div className={fieldClasses}>Responsibilities</div>
								<div className={valuesClasses}><strong>1. </strong>Worked as a full stack feature enhancement developer using Angular, Java - Maven and Salesforce CRM by developing classes and triggers in APEX and creating workflows, custom objects, custom fields and configuring securities in Salesforce on Kuebix logistic tool<br />
									<strong>2. </strong>Collaborated with other developers and business analysts to alleviate the number of bugs in the existing software<br />
									<strong>3. </strong>Followed agile methodology of project management</div>
							</div>
							<div className="mb-5"></div>
						</div>
						<div className="mb-5"></div>
					</div>
				</section>
			</div>
		);
	}
}

export default WorkExp;
