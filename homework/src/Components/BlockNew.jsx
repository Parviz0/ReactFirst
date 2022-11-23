import React from "react";
import QualityBtn from './QualityBtn';

const BlockNew = () => {
    return (
        <div className="block">
                <div className="top_part">

                </div>
                <div className="bottom_part">
                    <div className="date_two">
                        <span>Nov 02, 2022 · 7 min read</span>
                    </div>
                    <QualityBtn/>
                    <h3>Integration of open banking APIs: How to do it right</h3>
                    <div className="by">
                    <span>By John Eversole</span>
                </div>
        </div>
        </div>
    )
}

export default BlockNew;