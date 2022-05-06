import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const FormC = ({ logout }) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        REAT - REAL ESTATE APPELLATE TRIBUNAL
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Appellants
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/appellant/login"
                                    onClick={logout}
                                >
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="section-form mb-5">
                <div className="container mt-5">
                    <form className="row g-3">
                        <h5>1. Particulars of the Appellant</h5>
                        <h6>Name of the Appellant</h6>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="firstName" className="form-label">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lastName" className="form-label">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                required
                            />
                        </div>

                        <h6>
                            Address of the Existing Office/ Residence of the
                            Appellant
                        </h6>
                        <div className="mb-3">
                            <label htmlFor="AddLine1" className="form-label">
                                Address Line 1
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="AddLine1"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="AddLine2" className="form-label">
                                Address Line 2
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="AddLine2"
                                required
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="country" className="form-label">
                                Country
                            </label>

                            <select
                                className="custom-select form-control"
                                id="country"
                            >
                                {/* <option selected>Select a country...</option> */}
                                <option value="1">India</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label htmlFor="state" className="form-label">
                                State
                            </label>

                            <select
                                className="custom-select form-control"
                                id="state"
                            >
                                {/* <option selected>Select a state...</option> */}
                                <option value="1">Assam</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label htmlFor="landmark" className="form-label">
                                Landmark
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="landmark"
                                required
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label htmlFor="city" className="form-label">
                                City
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="city"
                                required
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label htmlFor="district" className="form-label">
                                District
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="district"
                                required
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="pin" className="form-label">
                                Pin
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="pin"
                                required
                            />
                        </div>

                        <h6>Address for Service of all Notices</h6>
                        <div className="mb-3">
                            <label htmlFor="serAddLine1" className="form-label">
                                Address Line 1
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="serAddLine1"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="serAddLine2" className="form-label">
                                Address Line 2
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="serAddLine2"
                                required
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label
                                htmlFor="serAddCountry"
                                className="form-label"
                            >
                                Country
                            </label>

                            <select
                                className="custom-select form-control"
                                id="serAddCountry"
                            >
                                {/* <option selected>Select a country...</option> */}
                                <option value="1">India</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label htmlFor="serAddState" className="form-label">
                                State
                            </label>

                            <select
                                className="custom-select form-control"
                                id="serAddState"
                            >
                                {/* <option selected>Select a state...</option> */}
                                <option value="1">Assam</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label htmlFor="serLandMark" className="form-label">
                                Landmark
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="serLandMark"
                                required
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label htmlFor="SerAddCity" className="form-label">
                                City
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="SerAddCity"
                                required
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label
                                htmlFor="SerAddDistrict"
                                className="form-label"
                            >
                                District
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="SerAddDistrict"
                                required
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="serAddPin" className="form-label">
                                Pin
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="serAddPin"
                                required
                            />
                        </div>

                        <h6>Contact Details</h6>
                        <div className="col-md-6 mb-3">
                            <label
                                htmlFor="mobileNumber"
                                className="form-label"
                            >
                                Mobile Number
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="mobileNumber"
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="emailAdd" className="form-label">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="emailAdd"
                                required
                            />
                        </div>

                        <h5>2. Particulars of the Respondent</h5>
                        <h6>Name of the Respondent</h6>
                        <div className="col-md-6 mb-3">
                            <label
                                htmlFor="resfirstName"
                                className="form-label"
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="resfirstName"
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="reslastName" className="form-label">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="reslastName"
                                required
                            />
                        </div>

                        <h6>Office Address of the Respondent</h6>
                        <div className="mb-3">
                            <label htmlFor="resAddLine1" className="form-label">
                                Address Line 1
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="resAddLine1"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="resAddLine2" className="form-label">
                                Address Line 2
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="resAddLine2"
                                required
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label htmlFor="resCountry" className="form-label">
                                Country
                            </label>

                            <select
                                className="custom-select form-control"
                                id="resCountry"
                            >
                                {/* <option selected>Select a country...</option> */}
                                <option value="1">India</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label htmlFor="resState" className="form-label">
                                State
                            </label>

                            <select
                                className="custom-select form-control"
                                id="resState"
                            >
                                {/* <option selected>Select a state...</option> */}
                                <option value="1">Assam</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label htmlFor="resLandmark" className="form-label">
                                Landmark
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="resLandmark"
                                required
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label htmlFor="resCity" className="form-label">
                                City
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="resCity"
                                required
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label htmlFor="resDistrict" className="form-label">
                                District
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="resDistrict"
                                required
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="resPin" className="form-label">
                                Pin
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="resPin"
                                required
                            />
                        </div>

                        <h6>Address for Service of all Notices</h6>
                        <div className="mb-3">
                            <label
                                htmlFor="ResSerAddLine1"
                                className="form-label"
                            >
                                Address Line 1
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="ResSerAddLine1"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="ResSerAddLine2"
                                className="form-label"
                            >
                                Address Line 2
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="ResSerAddLine2"
                                required
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label
                                htmlFor="ResSerCountry"
                                className="form-label"
                            >
                                Country
                            </label>

                            <select
                                className="custom-select form-control"
                                id="ResSerCountry"
                            >
                                {/* <option selected>Select a country...</option> */}
                                <option value="1">India</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label htmlFor="ResSerState" className="form-label">
                                State
                            </label>

                            <select
                                className="custom-select form-control"
                                id="ResSerState"
                            >
                                {/* <option selected>Select a state...</option> */}
                                <option value="1">Assam</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label
                                htmlFor="ResSerLandmark"
                                className="form-label"
                            >
                                Landmark
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="ResSerLandmark"
                                required
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label htmlFor="ResSerCity" className="form-label">
                                City
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="ResSerCity"
                                required
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label
                                htmlFor="ResSerDistrict"
                                className="form-label"
                            >
                                District
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="ResSerDistrict"
                                required
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="ResSerPin" className="form-label">
                                Pin
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="ResSerPin"
                                required
                            />
                        </div>

                        <h6>Contact Details</h6>
                        <div className="col-md-6 mb-3">
                            <label
                                htmlFor="resMobileNumber"
                                className="form-label"
                            >
                                Mobile Number
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="resMobileNumber"
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="resEmail" className="form-label">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="resEmail"
                                required
                            />
                        </div>

                        <h5>3. Jurisdiction of the Appellant Tribunal :</h5>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="juridiction"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="juridiction"
                            >
                                The appellant declares that the subject matter
                                of the appeal falls within the jurisdiction of
                                the Appellate Tribunal
                            </label>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label
                                htmlFor="registrationNum"
                                className="form-label"
                            >
                                Project Registration Number
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="registrationNum"
                                required
                            />
                        </div>

                        <h5>4. Limitation :</h5>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="limitationCheck"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="limitationCheck"
                            >
                                The appellant declares that the appeal is within
                                the limitation specified in sub-section (2) of
                                section 44
                            </label>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label
                                htmlFor="limitationReason"
                                className="form-label"
                            >
                                If the appeal is filed after the expiry of the
                                limitation period specified under sub-section
                                (2) of section 44 specify reasons for delay:
                            </label>
                        </div>
                        <div className="col-md-6 mb-3">
                            <textarea
                                rows="10"
                                className="form-control"
                                id="limitationReason"
                                required
                            />
                        </div>

                        <h5>5. Facts of the case:</h5>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="facts" className="form-label">
                                Give concise statement of facts and grounds of
                                appeal against the specific order of the
                                Authority of the Adjudicating Officer, as the
                                case may be passed under :
                            </label>
                        </div>
                        <div className="col-md-6 mb-3">
                            <textarea
                                rows="10"
                                className="form-control"
                                id="facts"
                                required
                            />
                        </div>

                        <h5>6. Grounds of Appeal</h5>
                        <div className="col-md-6 mb-3">
                            <label
                                htmlFor="groundsOfAppeal"
                                className="form-label"
                            >
                                Please Specify the grounds of the Appeal:
                            </label>
                        </div>
                        <div className="col-md-6 mb-3">
                            <textarea
                                rows="10"
                                className="form-control"
                                id="groundsOfAppeal"
                                required
                            />
                        </div>

                        <h5>7. Relief(s) sought</h5>
                        <div className="col-md-6 mb-3">
                            <label
                                htmlFor="reliefSought"
                                className="form-label"
                            >
                                Specify the relief(s) sought explaining the
                                grounds of relief(s) and the legal provisions(if
                                any) relied upon:
                            </label>
                        </div>
                        <div className="col-md-6 mb-3">
                            <textarea
                                rows="10"
                                className="form-control"
                                id="reliefSought"
                                required
                            />
                        </div>

                        <h5>8. Interim order, if prayed for</h5>
                        <div className="col-md-6 mb-3">
                            <label
                                htmlFor="interimOrder"
                                className="form-label"
                            >
                                Pending final decision on the appeal, the
                                appellant seeks issue of the following interim
                                order: [Give here the nature of the interim
                                order prayed for with reasons]
                            </label>
                        </div>
                        <div className="col-md-6 mb-3">
                            <textarea
                                rows="10"
                                className="form-control"
                                id="interimOrder"
                                required
                            />
                        </div>

                        <h5>
                            9. Matter not pending with any other court, etc:
                        </h5>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="matterPendingCheck"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="matterPendingCheck"
                            >
                                The appellant further declares that the matter
                                regarding which this appeal has been made, is
                                not pending before any court of law or any other
                                authority or any other Tribunal(s).{' '}
                            </label>
                        </div>

                        <div className="col-md-12 mb-3 ">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <footer className="bg-primary text-white text-center text-lg-start">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Footer Content</h5>

                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Iste atque ea quis molestias.
                                Fugiat pariatur maxime quis culpa corporis vitae
                                repudiandae aliquam voluptatem veniam, est atque
                                cumque eum delectus sint!
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Policies</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white">
                                        Copyright Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">
                                        Hyperlinking Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">
                                        Terms of Use
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">
                                        Disclaimer
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-2">
                                Important Links
                            </h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white">
                                        Gauhati High Court
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">
                                        Government of Assam
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">
                                        Assam Real Estate Regulatory Authority
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-center p-3">
                    © 2022 Copyright:
                    <a className="text-white" href="https://reat.assam.gov.in/">
                        REAT - REAL ESTATE APPELLATE TRIBUNAL
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default connect(null, { logout })(FormC);
