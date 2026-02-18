import React from "react";
import "./button.css"

function Button({ data }) {
    
  console.log(data)
    return (
        <div className="button-wrapper">
            <button
                className="button"
                style={{ background: data.color, color: data.colorFont, fontSize: data.fontSize }}
                onClick={data.onClick}
            >
                {data.text}
            </button>
        </div>
    );
}

export default Button;