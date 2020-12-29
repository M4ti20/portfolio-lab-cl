import React from "react";
import "./HomeHeader.scss";
import homeJpg from "../../../Assets/Home-Hero-Image.jpg";
import decoration from "../../../Assets/Decoration.svg";
import HomeNav from "../HomeNav/HomeNav";

const HomeHeader = ({user, email}) => {
    return(
        <section className="home-header-container">
            <div className="header-left-img">
                <img src={homeJpg} alt="" className="main-image"/>
            </div>
            <div className="header-right-content">
                <HomeNav user={user} email={email}/>
                <div className="header-main-content">
                    <div className="header-main-text">
                        <p className="header-main-text-p">Zacznij pomagać!</p>
                        <p className="header-main-text-p">Oddaj niechciane rzeczy w zaufane ręce</p>
                        <img src={decoration} alt="" />
                    </div>
                    <div className="header-main-button">
                        {user ?(
                            <>
                                <a href="/oddaj-rzeczy"><button className="first-main-btn">Oddaj <br/> rzeczy</button></a>
                                <a href="/oddaj-rzeczy"><button className="second-main-btn">Zorganizuj <br/> zbiórkę</button></a>
                             </>
                        ):(
                            <>
                                <a href="/login"><button className="first-main-btn">Oddaj <br/> rzeczy</button></a>
                                <a href="/login"><button className="second-main-btn">Zorganizuj <br/> zbiórkę</button></a>
                            </>
                        )}
                        {/* <a href="/login"><button className="first-main-btn">Oddaj <br/> rzeczy</button></a>
                       <a href="/login"><button className="second-main-btn">Zorganizuj <br/> zbiórkę</button></a> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHeader;