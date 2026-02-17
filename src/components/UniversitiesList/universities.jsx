import React from 'react'
import "./universities.css"
import Title from "../title/title.jsx";

function UniversitiesList({universities}) {
    return (
        <div>
            <Title title="UNIVERSITES PARTENAIRES" color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)" colorFont="#FFFFFF00" fontSize="24px" arrow={true} />
            <div className="carrousel">
                {universities.map((item, index) => (
                    <div key={index}>
                        <div className="image-wrapper">
                            <img src={`/${item.image}`} alt={item.name}/>
                        </div>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UniversitiesList