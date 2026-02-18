import React from 'react'
import "./universities.css"
import Title from "../Title/title.jsx";

function UniversitiesList({universities}) {
    const baseUrl = import.meta.env.BASE_URL;
    
    return (
        <div>
            <Title title="UNIVERSITES PARTENAIRES" color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)" colorFont="#FFFFFF00" fontSize="24px" arrow={true} />
            <div className="carrousel">
                {universities.map((item, index) => (
                    <div key={index}>
                        <div className="image-wrapper">
                            <img src={`${baseUrl}${item.image}`} alt={item.name}/>
                        </div>
                        <p>{item.name}</p>
                        <p className="smallText">{item.ville} - {item.postalCode}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UniversitiesList