import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";

export const Home = () => {
    const [username, setUsername] = useState("");
    const history = useHistory();
    const checkInput = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const handelFormSubmit = (e) => {
        e.preventDefault();
        console.log(username.length);
        if (username.length <= 0) {
            alert("Username is Empty.");
        } else {
            setUsername("");
            history.push(`/Resume/${username}`);
        }
    };

    return (
        <div className="wrapper">
            <h1 className="title">Github Profile</h1>
            <p className="sub-title">Generate Your Github Profile</p>
            <form className="form" onSubmit={handelFormSubmit}>
                <label className="form__label">
                    <span>Github Username</span>
                </label>
                <input
                    type="text"
                    value={username}
                    className="form__username"
                    name="username"
                    onChange={checkInput}
                />
                <button className="form__btn" type="submit">
                    Generate
                </button>
            </form>
        </div>
    );
};
