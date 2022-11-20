
import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import Footer from "../../components/Footer";
import "./style.css";

function Home() {
    return (
        <>
            <div>
                <Link to={`/`}>
                    <IconButton aria-label="home" className="home-btn__icon" size="large">
                        <HomeIcon />
                    </IconButton>
                </Link>
            </div>
            <div className="home__wrapper home__page">
                <div className="home__icon">
                    <img src="/src/assets/onbox-full-icon.png" alt="ONBOX" />
                </div>
                <div>
                    <h1>
                        Bem Vindo Ao ONBOX
                    </h1>
                </div>
            </div>
            <Footer />
        </>
    );
} 
export default Home;