import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import ThreeColumns from "./ThreeColumns/ThreeColumns";
import SimpleSteps from "./SimpleSteps/SimpleSteps";
import AboutAs from "./AboutAs/AboutAs";


const Home = () => {

    return(
        <>
            <HomeHeader/>
            <ThreeColumns/>
            <SimpleSteps/>
            <AboutAs/>
        </>
    )
}

export default Home;