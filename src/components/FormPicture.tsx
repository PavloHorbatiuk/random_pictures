import React from 'react';
import './../App.scss'
type FormPicture = {
    webAddress: string
    title: string

}
const FormPicture: React.FC<FormPicture> = ({webAddress, title}) => {
    return (
        <>
            <img className='image' src={webAddress} alt={title}/>
        </>
    )
}


export default FormPicture;
