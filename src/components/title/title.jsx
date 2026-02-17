import React from 'react';
import arrowImage from '/arrow.png';

function Title({ title , color , colorFont, fontSize , arrow}) {
    return (  
    <div style={{display: 'flex', height: '48px',padding: '8px 0',alignItems: 'center',flexShrink: 0,alignSelf: 'stretch'}}>
    <h1 style={{ background: color , backgroundClip: 'text', WebkitBackgroundClip: 'text', color: colorFont, fontSize: fontSize , fontFamily: 'Changa One' }}>{title}</h1>
    {arrow ? <img src={arrowImage} alt="Arrow" /> : null}
    </div>
    )
}

export default Title;