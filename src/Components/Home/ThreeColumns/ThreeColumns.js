import React from "react";
import "./ThreeColumns.scss";

const TreeColumns = () => {
    return(
        <section className="tree-columns-container">
            <div className="column">
                <span className="column-number">10</span>
                <p className="column-title">Oddanych worków</p>
                <p className="column-description">Lorem ipsum dolor sit amet, consectetrum adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>

            <div className="column">
                <span className="column-number">5</span>
                <p className="column-title">Wspartych organizacji</p>
                <p className="column-description">Lorem ipsum dolor sit amet, consectetrum adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>

            <div className="column">
                <span className="column-number">7</span>
                <p className="column-title">Zorganizowanych zbiórek</p>
                <p className="column-description">Lorem ipsum dolor sit amet, consectetrum adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
        </section>
    )
};

export default TreeColumns;