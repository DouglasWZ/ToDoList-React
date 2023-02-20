import React from "react";
import freecodeCampLogo from '../imagenes/FreeCodeCampLogo.png';

const Logo = () => {
    return (
        <div className='freecodecamp-logo-contenedor'>
            <img src={freecodeCampLogo}
                className='freecodecamp-logo'
            />
        </div>
    )
}

export default Logo;