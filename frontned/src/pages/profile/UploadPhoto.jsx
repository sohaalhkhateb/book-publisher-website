import  './UploadPhoto.css'
import closeIcon from '../../assets/images/icons/close.png'
import { useState } from 'react';

export function UploadPhoto({showUpload, setShowUplod}) {

    const [image, setImage] = useState(null);

    function closeUploade() {
        setShowUplod(!showUpload);
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if(file) {
            setImage(URL.createObjectURL(file));
            setShowUplod(!showUpload);
        }
    }
    return(
        <div className="upload-photo-container">
            <img 
                src={closeIcon}
                className='close-upload'
                onClick={closeUploade}
                alt=""
            />
            <p className="upload-txt">
                Uoload your new profile photo:
            </p>
            <input 
                type="file"
                className="photo-input"
                onChange={handleFileChange}
            />
        </div>
    )
}