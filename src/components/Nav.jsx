import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            console.log(window.scrollY);
            if (window.scrollY > 50) {
                setShow(true);
            } else {
                setShow(false);
            }
        });

        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);

    const handleChange = (event) => {
        setSearchValue(event.target.value);
        navigate(`/search?q=${event.target.value}`)
    };

    return (
        <nav className={`nav ${show && "nav_black"}`}>
            <img
                alt="Netflix logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
                className="nav__logo"
                onClick={() => {
                    window.location.reload();
                }}
            />
            <input
                value={searchValue}
                onChange={handleChange}
                className="nav__input"
                type="text"
                placeholder="영화를 검색해주세요."
            />
            <img alt="User logged" src="bonobono.jpg" className="nav_avatar" />
        </nav>
    );
}
