import React from "react";
import './css/projectList.css'

function ProjectList({projects}) {
    let index = 0;

    return(
        projects.map((item) => (
            <div className='item' key={index++}>
                <img src={item.img} alt='' />
            </div>
        ))
    )
}

export default ProjectList;