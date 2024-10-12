
import React from "react";
import "../styles/footer.css";
const Contact = () => {
    return (
        <div>
            <div className="container my-4">
                <h2>Contact Us</h2>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                    >
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                    />
                </div>
                <p>Select your Query</p>
                <select
                    className="form-select"
                    aria-label="Default select example"
                >
                    <option selected="">Product related</option>
                    <option value={1}>Delievery related</option>
                    <option value={2}>Quality related</option>
                    <option value={3}>About our terms</option>
                </select>
   
                <p>Tell us about yourself</p>
                <div className="form-floating">
                    <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"
                        style={{ height: 100 }}
                        defaultValue={""}
                    />
                    <label htmlFor="floatingTextarea2">Comments</label>
                </div>
                <p>Elaborate Your Concern</p>
                <div className="form-floating">
                    <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"
                        style={{ height: 100 }}
                        defaultValue={""}
                    />
                    <label htmlFor="floatingTextarea2">Comments</label>
                </div>
                <input
                    className="btn btn-primary"
                    style={{ margin: "inherit" }}
                    type="submit"
                    defaultValue="Submit"
                />
                <div
                    className="container mb-4 d-flex"
                    style={{ justifyContent: "space-between" }}
                >
                    <div className="footer text-nm">
                        © 2023-2024 Milk on the Way, Inc.{" "}
                        <span>
                            <a href="" style={{fontSize:20}}>.Privacy</a>
                        </span>
                        <span>
                            <a href="" style={{fontSize:20}}>· Terms</a>
                        </span>
                    </div>
                    {/* <a href="index.html">Back to top</a> */}
                </div>
            </div>
        </div>
    );
};

export default Contact;
