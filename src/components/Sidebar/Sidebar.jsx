/** @format */

import React from "react";
import "./Sidebar.scss";
import { useNavigate } from "react-router-dom";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher, GiProgression } from "react-icons/gi";


function Sidebar() {
    const navigate = useNavigate();
    return (
        <>
            <div className="sideBar">
                <div data-toggle="tooltip"
                    data-placement="right"
                    title="Student" onClick={()=>navigate('/')}>
                
                <PiStudentBold size={'2em'} />

                 </div>

                <div
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Teacher"
                    onClick={() => navigate("/add")}
                >
                    <GiTeacher size={'2em'} />
                  
                </div>

                <div
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Marks"
                    onClick={() => navigate("/marks")}
                >
                    <GiProgression size={'2em'} />
                </div>
            </div>
        </>
    );
}

export default Sidebar;
