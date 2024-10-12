import React from "react";
import "../styles/loginstyle.css";

const LoginForVendor = () => {
    return (
        <div>
            <div className="container login ">
                <div className="smalloginbox clr">
                    <div className="head">Milk on the Way</div>
                    <b style={{ fontSize: 20, marginTop: 20 }}>
                        {" "}
                        Login for Vendor
                    </b>
                    <form>
                        <div className="mb-3">
                            <label
                                htmlFor="exampleInputname"
                                className="form-label"
                            >
                                Enter your vendor id
                            </label>
                            <br />
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputname"
                                aria-describedby="emailHelp"
                            />
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>*/}
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="exampleInputPassword1"
                                className="form-label"
                            >
                                Password
                            </label>
                            <br />
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                            />
                            <br />
                            <a href="">forgot password?</a>
                        </div>
                        <button
                            type="button"
                            id="log"
                            style={{ marginTop: 20 }}
                            className="btn btn-info"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForVendor;
