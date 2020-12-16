import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import ThreeColumns from "./ThreeColumns/ThreeColumns";
import SimpleSteps from "./SimpleSteps/SimpleSteps";
import AboutAs from "./AboutAs/AboutAs";
import Contact from "./Contact/Contact";
import WhoWeHelp from "./WhoWeHelp/WhoWeHelp";
import HomeNav from "./HomeNav/HomeNav";


const Home = () => {

    return(
        <>
            <HomeNav/>
            <HomeHeader/>
            <ThreeColumns/>
            <SimpleSteps/>
            <AboutAs/>
            <WhoWeHelp/>
            <Contact/>
        </>
    )
}

export default Home;