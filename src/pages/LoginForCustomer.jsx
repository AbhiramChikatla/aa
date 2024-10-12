import React from "react";
import "../styles/loginstyle.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const LoginForCustomer = () => {
    const [resMessage, setresMessage] = useState({});
    const [visible, setVisible] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
    } = useForm();
    const accountCreated = () => {
        alert("Login Successful...");
    };
    function tochange() {
        setTimeout(() => {
            setVisible(false)
        }, 2000);
        setVisible(true)
    }
    const failed = () => {
        alert("Failed to login...");
    };
    const onSubmit = async (data) => {
        reset();
        console.log(data);
        let response = await fetch("http://localhost:3000/login", {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(data),
        });
        let content = await response.json();
        console.log(content);
        setresMessage(content);
        if (content.success) {
            accountCreated();
        } else {
            failed();
        }
        tochange();
    };
    return (
        <>
            {resMessage.success ? (
                <>
                    <Navigate to={"/"} />
                </>
            ) : (
                <div>
                    <div className="container login ">
                        <div className="smalloginbox clr">
                            <div className="head">Milk on the Way</div>
                            <b style={{ fontSize: 20, marginTop: 20 }}>
                                {" "}
                                Login for Customer
                            </b>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputname"
                                        className="form-label"
                                    >
                                        Enter your Email
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputname"
                                        aria-describedby="emailHelp"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message:
                                                    "This field is required",
                                            },
                                            minLength: {
                                                value: 3,
                                                message:
                                                    "The username must consist of at least 3 characters.",
                                            },
                                            pattern: {
                                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                                                message:
                                                    "Please enter a valid email address.",
                                            },
                                        })}
                                    />
                                
                                    {errors.email && (
                                        <span className=" flex gap-2 items-center ml-1 text-sm text-danger">
                                            {errors.email.message}
                                        </span>
                                    )}
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
                                        placeholder=""
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message:
                                                    "This field is required",
                                            },
                                            minLength: {
                                                value: 7,
                                                message:
                                                    "The password must consist of at least 7 characters.",
                                            },
                                        })}
                                    />
                                    {errors.password && (
                                        <span className=" flex gap-2 items-center ml-1 text-sm text-danger">
                                            {errors.password.message}
                                        </span>
                                    )}
                                    <br />
                                    <a href="">forgot password?</a>
                                </div>
                                <button
                                    type="submit"
                                    id="log"
                                    style={{ marginTop: 20 }}
                                    className="btn btn-info"
                                
                                >
                                    Login
                                </button>
                                {resMessage.msg && visible && (
                                    <div className="alert alert-danger mt-3">
                                        {resMessage.msg}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default LoginForCustomer;
