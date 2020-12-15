import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import ThreeColumns from "./ThreeColumns/ThreeColumns";
import SimpleSteps from "./SimpleSteps/SimpleSteps";
import AboutAs from "./AboutAs/AboutAs";
import Contact from "./Contact/Contact";


const Home = () => {

    return(
        <>
            <HomeHeader/>
            <ThreeColumns/>
            <SimpleSteps/>
            <AboutAs/>
            <Contact/>
        </>
    )
}

export default Home;