import React from "react";

const Header = () => {
    return (
        <div className="head">
             <div className="name_company">
                <span>Luxe Quality</span>
             </div>
             <div className="right_part_head">
                <button>HOME</button>
                <button>ABOUT US</button>
                <button>EXPERTISE</button>
                <button>SERVICES</button>
                <button>CASES</button>
                <button className="contact">CONTACT US</button>
             </div>
        </div>
    )
}


export default Header;